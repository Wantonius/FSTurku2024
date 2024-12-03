import React from 'react';

export const themes = {
	dark:{
		textColor:"#ffffff",
		background:"#595959"
	},
	light:{
		textColor:"#000000",
		background:"#d4d4d4"
	}
}

const ThemeContext = React.createContext(themes.dark)

ThemeContext.displayName = "ThemeContext";

export default ThemeContext;