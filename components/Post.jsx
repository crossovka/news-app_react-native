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
				<PostTitle>{truncateTitle(title)}</PostTitle>
				<PostDate>{new Date(date).toLocaleDateString()}</PostDate>
				{/* date-fns => date-fns библиотека date-fns*/}
			</PostDetails>
		</PostView>
	)
}
// Уже был styled Post и компонент post сверху, поэтому перемеиновал стайлед пост в пост вью
// const Название компонента. styled используй view {обычный css}
const PostView = styled.View`
	margin: 5px;
	flex-direction: row;
	padding: 15px;
	// background-color: blue;
	border-radius: 30px;
	
	border-bottom-width: 2px;
	border-bottom-color: rgba(0, 0, 0, 0.1);
	border-bottom-style: solid;

	border-top-width: 1px;
	border-top-color: rgba(0, 0, 0, 0.1);
	border-top-style: solid;
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
	line-height: 24px;
`;
const PostDate = styled.Text`
	font-size: 12px;
	color: rgba(0, 0, 0, 0.4);
	margin-top: 2px;
	text-align: right;
`;

// это уже не view и не text и нужно другой компонент
const PostImage = styled.Image`
	display: flex;
	align-self: center;
	width: 70px;
	height: 70px;
	border-radius: 15px;

`;
const truncateTitle = (str) => {
	if (str.length >= 50) {
		return str.substring(0, 50) + '...';
	}
	// если заголовок меньше 50, то он просто рендерится
	return str;
}