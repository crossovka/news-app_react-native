import { Text,View, ActivityIndicator } from "react-native";

export const Loading = () => {
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
};