import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { HomeScreen } from "./home";
import { FullPostScreen } from "./fullPost";
//  yarn add @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context react-native-gesture-handler

// импортировал функцию выше, чтобы с помощью неё создать навигацю.указал и вызвал эту функцию
const Stack = createNativeStackNavigator();

// теперь создаю специальный отдельный компонент Navigation
export const Navigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{/* название экрана обяхательно должно быть уникальным 
				дальше указываю компонент, который будет рендериться
				потом указываю, что пока будет рендериться экран у меня будет указываться заголовок*/}
				<Stack.Screen name="Home" component={HomeScreen} options={{title: 'Новости'}} />
				<Stack.Screen name="fullPost" component={FullPostScreen} options={{title: 'Статья'}} />
			</Stack.Navigator>
		{/* // для того,чтобы все это можно было передатьв приложение нужно обернуть в еще один компонент */}
		</NavigationContainer>
		// (это что-то вроде отдельного компонента,коректно рендерищийся навигацию)
	);
};