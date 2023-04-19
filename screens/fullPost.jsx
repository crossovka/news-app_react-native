import React from "react";
import axios from "axios";
import styled from 'styled-components/native';
import {View,Image,Alert,} from 'react-native'
import { Loading } from "../components/loading";

export const FullPostScreen = ( {route, navigation} ) => {
	const {id, title} = route.params
	// в местах, где title и id буду подкручивать эти значения. Чтобы вставить это в title также указываю navigation
	// чтобы поменять заголовок option
	// console.log(route);
	// console.log(navigation);

	const [isLoading, setIsLoading] = React.useState(true);
	// const [items, setItems] = React.useState([]);
	const [data, setData] = React.useState([]);

	React.useEffect(() => {
		// при первом рендере меняю options
		navigation.setOptions({
			title,
		});

		axios
			.get('https://6422645e86992901b2c711ab.mockapi.io/post/' + id)
			// получаю статью
			.then(({ data }) => {
				// тут сохраняю его в state
				setData(data);
			})
			.catch((err) => {
				console.log(err);
				Alert.alert('ААА ОШИБКА', 'Не удалось получить статью');
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);


	if (isLoading) {
		return <Loading />;
	}


	return (
		<FullPostView>
			<PostImage source={{ uri: data.imageUrl}} />
			<PostText>
				{data.text}
			</PostText>
		</FullPostView>
	)
}

const PostText = styled.Text`
	font-size: 16px;
	font-weight: 800;
	line-height: 24px;
`;
	
const PostImage = styled.Image`
	margin-bottom: 20px;
	
	width: 100%;
	height: 250px;
	
	border-radius: 10px;
`;
const FullPostView = styled.View`
	margin: 5px;
	padding: 15px;
`;