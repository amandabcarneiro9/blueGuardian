import { Text, View, StyleSheet } from 'react-native';

export default function Index() {
	return (
		<View style={styles.container}>
			<Text>BlueGuardian</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#cabfa8',
	},
});
