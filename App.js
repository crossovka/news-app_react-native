import React from 'react';
import { View, StatusBar, FlatList } from 'react-native';
import { Navigation } from './screens/navigation';

// import { HomeScreen } from './screens/home';
// import { FullPostScreen } from './screens/fullPost';

export default function App() {
	return <Navigation />;
	// return (
	// 	<View>
	// 		{/* <FlatList> */}
	// 		{/* <HomeScreen /> */}
	// 		{/* <FullPostScreen /> */}
	// 		<StatusBar theme="auto" />
	// 		{/* </FlatList> */}
	// 	</View>
	// );
}
