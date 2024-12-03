import {useState} from 'react';
import {View,Pressable,Text,TextInput,StyleSheet} from 'react-native';

const GreetingForm = (props) => {
	
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		justifyContent:"center",
		alignItems:"center"
	},
	row:{
		flex:1,
		flexDirection:"row",
		alignItems:"center",
		justifyContent:"space-between"
	},
	buttonRow:{
		justifyContent:"center"
	},
	button:{
		height:80,
		width:110,
		backgroundColor:"green",
		alignItems:"center",
		justifyContent:"center"
	},
	textInput:{
		backgroundColor:"lightblue",
		width:200
	}
})

export default GreetingForm;