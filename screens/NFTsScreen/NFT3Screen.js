import React,{useState} from "react";
import { StyleSheet,Text, View, Image, Platform, StatusBar, ScrollView, TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Animated, { Keyframe, Easing, color } from 'react-native-reanimated';
import { useTheme } from '@react-navigation/native';

const enteringAnimation = new Keyframe({
    0: {
		opacity: 0,
    },
    100: {
		opacity: 1,
    },
}).duration(500)

const NFT3Screen = () => {
	const [section, setSection] = useState(1)
	const { colors } = useTheme();
	const Section1 = () => {
		return (
			<Animated.View entering={enteringAnimation} style={styles.content}>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text}]}>Section 1 Title 1</Text>
					<Text style={[styles.right, {color:colors.text}]}>Content 1</Text>
				</View>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text}]}>Section 1 Title 2</Text>
					<Text style={[styles.right, {color:colors.text}]}>Content 2</Text>
				</View>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text}]}>Section 1 Title 3</Text>
					<Text style={[styles.right, {color:colors.text}]}>Content 3</Text>
				</View>

				<Text style = {[styles.paragraph, {color:colors.text}]}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Maecenas ornare lacus sit amet est finibus, ut eleifend tellus ultrices. 
				Praesent pretium gravida sapien, vel lobortis enim lacinia eu. 
				Duis sodales ex at leo semper, euismod commodo tellus feugiat. 
				Maecenas luctus mattis egestas. 
				</Text>
			</Animated.View>
		)
	}

	const Section2 = () => {
		return (
			<Animated.View entering={enteringAnimation} style={styles.content}>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text}]}>Section 2 Title 1</Text>
					<Text style={[styles.right, {color:colors.text}]}>Content 1</Text>
				</View>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text}]}>Section 2 Title 2</Text>
					<Text style={[styles.right, {color:colors.text}]}>Content 2</Text>
				</View>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text}]}>Section 2 Title 3</Text>
					<Text style={[styles.right, {color:colors.text}]}>Content 3</Text>
				</View>

				<Text style = {[styles.paragraph, {color:colors.text}]}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Maecenas ornare lacus sit amet est finibus, ut eleifend tellus ultrices. 
				Praesent pretium gravida sapien, vel lobortis enim lacinia eu. 
				Duis sodales ex at leo semper, euismod commodo tellus feugiat. 
				Maecenas luctus mattis egestas. 
				</Text>
			</Animated.View>
		)
	}

	const Section3 = () => {
		return (
			<Animated.View entering={enteringAnimation} style={styles.content}>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text}]}>Section 3 Title 1</Text>
					<Text style={[styles.right, {color:colors.text}]}>Content 1</Text>
				</View>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text}]}>Section 3 Title 2</Text>
					<Text style={[styles.right, {color:colors.text}]}>Content 2</Text>
				</View>
				<View style={styles.listItem}>
					<Text style={[styles.left, {color:colors.text}]}>Section 3 Title 3</Text>
					<Text style={[styles.right, {color:colors.text}]}>Content 3</Text>
				</View>

				<Text style = {[styles.paragraph, {color:colors.text}]}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
				Maecenas ornare lacus sit amet est finibus, ut eleifend tellus ultrices. 
				Praesent pretium gravida sapien, vel lobortis enim lacinia eu. 
				Duis sodales ex at leo semper, euismod commodo tellus feugiat. 
				Maecenas luctus mattis egestas. 
				</Text>
			</Animated.View>
		)
	}

	

return (
	<ScrollView>
    <View style={[styles.container, {backgroundColor: colors.backgroundColor}]}>
        <Image
        style={styles.poster}
        source={require('../../assets/card3.png')}
        />
        <Text style={[styles.title, {color: colors.text}]}>This is where the Topic will Go</Text>

        <View style={[styles.menu, {borderBottomColor: colors.borderBottom}]}>
			<TouchableOpacity onPress={() => setSection(1)}>
            <Text style={section == 1 ? [styles.subtitleActive, { color: colors.text}]: [styles.subtitle,{ color: colors.textFade}]}>
                Section 1
            </Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setSection(2)}>
            <Text style={section == 2 ? [styles.subtitleActive, { color: colors.text}]: [styles.subtitle,{ color: colors.textFade}]}>
                Section 2
            </Text>
			</TouchableOpacity>
			<TouchableOpacity onPress={() => setSection(3)}>
			<Text style={section == 3 ? [styles.subtitleActive, { color: colors.text}]: [styles.subtitle,{ color: colors.textFade}]}>
                Section 3
            </Text>
			</TouchableOpacity>
        </View>

		{section == 1 && <Section1 />}
		{section == 2 && <Section2 />}
		{section == 3 && <Section3 />}

        
    </View>
	</ScrollView>
);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
	poster: {
		height: 250,
		width: 400,
		resizeMode: 'contain'
	},
	title: {
		fontSize: 20,
		margin:10,
		width: '80%',
		textAlign: 'center'
	},
	menu: {
		borderBottomWidth: 1,
		flex:1,
		flexDirection:'row',
		width: '80%',
		justifyContent:'space-around'
	},
	subtitleActive: {
		borderBottomColor: '#FF6F00',
		borderBottomWidth: 1,
		paddingBottom:5,
		paddingHorizontal: 10,
		textAlign:'center'
	},
	subtitle:{
		paddingHorizontal: 10,
		paddingBottom:5,
	},
	content: {
		flex:6,
		width: '80%',
		marginVertical: 10,
	},
	listItem: {
		flexDirection:'row',
		alignContent:'space-between',
		width: '100%'
	},
	left: {
		flex:1,
		marginHorizontal:20,
		marginVertical: 5,
	}, 
	right: {
		flex:1,
		textAlign:'right',
		marginHorizontal:20,
		marginVertical: 5,
	},
	paragraph: {
		marginVertical: 10,
		textAlign: 'center',
	}
})

NFT3Screen.navigationOptions = (navData) => {
	headerShown:false
}



export default NFT3Screen;
