import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text,View,Image,Alert,FlatList,ActivityIndicator,RefreshControl} from 'react-native';
import { Post } from './components/Post';
import axios from 'axios';
import React from 'react';

export default function App() {
	// создал новый стэйт,чтобы показывать что идет загрузка статей.при первом запросе статей покажу, что идет загрузка
	const [isLoading, setIsLoading] = React.useState(true);
	const [items, setItems] = React.useState([]);

	const fetchPosts = () => {
		setIsLoading(true);
		axios
			.get('https://6422645e86992901b2c711ab.mockapi.io/post')
			// в момент,когда получу ответ от бэкэнда с помощью деструктуризации вытащить data
			// и поместить его в set items
			.then(({ data }) => {
				setItems(data);
			})
			.catch((err) => {
				console.log(err);
				// Сверху импортировал Alert
				Alert.alert('ААА ОШИБКА', 'Не удалось получить статью');
				// Alert.conform()
				// alert('ошибка при получении статей');
			})
			.finally(() => {
				setIsLoading(false);
			});
	};

	// говорю,что во время первого рендера мне необходимо отправить запрос на бэкэнд.позже я все это вынес в отдельную функцию сверху
	React.useEffect(fetchPosts, []);

	// Пустой массив обозначет, что  что эффект будет запускаться только один раз, при монтировании компонента. Без этого массива,
	// useEffect будет вызываться при каждом рендере компонента, что может вызвать проблемы с производительностью.

	// елси идет загрузка,то необходимо использовать View с ActivityIndicator
	if (isLoading) {
		return (
			<View
				style={{
					flex: 1,
					justifyContent: 'center',
					alignItems: 'center',
				}}>
				{/* использую ActivityIndicator,чтобы рендерить загрузку */}
				<ActivityIndicator size={'large'} />
				<Text style={{ marginTop: 20 }}>Загрузка</Text>
			</View>
		);
	}

	// если идет загрузка ссверху, то не рендерится нижняя часть

	return (
		<View style={styles.marg}>
			<FlatList
				// этот специальный компонент,который я импортировал будет показывать, что контент загружается, когда буду свайпать вниз
				// refreshung объясняет идет загрузка или нет.После нужно выполнить действие,после того,как свайп отпустили
				refreshControl={<RefreshControl refreshing={isLoading} onRefresh={fetchPosts}  />}
				// указываю,что флат лист будет получать data (массив статей)
				data={items}
				// говорю ему,что необходимо рендерить каждую статью(item)
				// renderItem вернет объект со всеми статьями, которые есть в items. С помощи деструктуризации указываю,что нужжно вытащить item
				// во FlatList не нужно писать key, как я это делал с помощью map-а и нужно делать деструктуризацию просто написав item
				// рендерится не будет и поэту я как бы говорю мол вытащи item из item-а
				renderItem={({ item }) => (
					<Post title={item.title} imageUrl={item.imageUrl} date={item.date} />
				)}
			/>
			{/* в моб разработке самогопо себе скрола по экрану нет и если бы тут было больше сатей,то вниз бы не получилось перемотать */}
			{/* для этого нужно сверху из библиотеки nativ-а вытащить FlatList */}

			{/* mock api генерирует json с данными. сплит терминале написать yarn add axios
			Для того,чтобы делать запросы на backend как fetch. нужно сверху импротировать
			Перед тем как его заюзать нужно сделать stste,где буду хранить эти статьи */}

			{/* говорю, что необходимо вытащить каждый объект */}
			{/* условие проверяет существует ли items. Если равен undefiend,то код внутри map не будет выложен */}
			{/* {items && items.map((obj) => (
				<Post
					key={obj.id} // добавьте уникальный ключ
					title={obj.title}
					date={obj.date}
					imageUrl={obj.imageUrl}
				/>
			))} */}
		</View>
	);
}

const styles = StyleSheet.create({
	intro: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	testText: {
		color: 'red',
		fontSize: 34,
	},
	marg: {
		marginTop: 45,
	},
});

// export default function App() {
// 	return (
// 		<View style={styles.intro}>
// 			<Text style={styles.testText}>Блог Чекасина</Text>
// 			{/* стилизация через обращение ранее прописаному объекту и вытаскиванию из него стилей*/}
// 			<Text
// 				style={{
// 					fontSize: 20,
// 					color: 'yellow',
// 				}}
// 			>
// 				Еще один вариант стилизации
// 			</Text>
// 			{/* Инлайн стилизация */}
// 			{/* расплитать терминал и написать yarn add styled-components и ипортировать го сверху
// 			это специальная библиотека. можно писать обычный css, который будет конвертироваться в стили, понятные ios*/}
// 			<Post />
// 		</View>
// 	);
// }
