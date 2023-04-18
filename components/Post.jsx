import styled from 'styled-components/native';
// доп библиотека для стилизации элементов, а не чать нэтива

// import myImage from './assets/splash.png';

// вытаскиваю из пропса заголовок,дату создания и картинку
export const Post = ({title, imageUrl, date}) => {
	return (
		<PostView>
			{/* моно сверху импортировать Image и добавлять его тут <Image></Image> это одно и тоже, просто при помощи styled я его стилизирую*/}

			{/* <Image 
				source={myImage} 
				style={{width: 200, height: 200}}
		/> */}

			<PostImage 
				source={{ uri: imageUrl }} 
			/>
			<PostDetails>
				<PostTitle>{title}</PostTitle>
				<PostDate>{date}</PostDate>
			</PostDetails>
		</PostView>
	)
}
// Уже был styled Post и компонент post сверху, поэтому перемеиновал стайлед пост в пост вью
// const Название компонента. styled используй view {обычный css}
const PostView = styled.View`
	flex-direction: row;
	padding: 15px;
	background-color: blue;
	border-radius: 30px;
	border-bottom-width: 2px;
	border-bottom-color: rgba(0, 0, 0, 0.1);
	border-bottom-style: solid;
`;
const PostDetails = styled.View`
	flex: 1;
	// flex 1 задает ту доступную ширину,которая есть на момент рендера
	justify-content: center
	margin-left: 12px;
`;
const PostTitle = styled.Text`
	font-size: 16px;
	font-weight: 800;
`;
const PostDate = styled.Text`
	font-size: 12px;
	color: rgba(0, 0, 0, 0.4);
	margin-top: 2px;
`;

// это уже не view и не text и нужно другой компонент
const PostImage = styled.Image`
	width: 70px;
	height: 70px;
	margin-left: 12px;
	border-radius: 15px;
`;