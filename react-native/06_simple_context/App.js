import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {useState} from 'react';
import Headline from './components/Headline';
import Paragraph from './components/Paragraph';
import ThemeButton from './components/ThemeButton';
import ThemeContext,{themes} from './context/ThemeContext';

export default function App() {
	
	const [state,setState] = useState({
		theme:themes.dark
	})
	
	const toggleTheme = () => {
		if(state.theme === themes.dark) {
			setState({
				theme:themes.light
			})
		} else {
			setState({
				theme:themes.dark
			})
		}
	}
	
	return (
	<ThemeContext.Provider value={state.theme}>
		<View style={styles.container}>
			<Headline>
			Installing the native stack navigator library
			</Headline>
			<Paragraph>
			The libraries we've installed so far are the building blocks and shared foundations for navigators, and each navigator in React Navigation lives in its own library. To use the native stack navigator, we need to install @react-navigation/native-stack :
			</Paragraph>
			<ThemeButton toggleTheme={toggleTheme}/>
			
			<StatusBar style="auto" />
		</View>
	</ThemeContext.Provider>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
