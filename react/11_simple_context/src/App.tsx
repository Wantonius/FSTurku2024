import { useState } from 'react'
import ThemeContext,{themes,ThemeType} from './context/ThemeContext';
import Headline from './components/Headline';
import Paragraph from './components/Paragraph';
import ThemeButton from './components/ThemeButton';

interface State {
	theme:ThemeType;
}

function App() {

	const [state,setState] = useState<State>({
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
		<>
			<ThemeContext.Provider value={state.theme}>
				<Headline>
				Voimakas taifuuni kulkee Taiwanin yli päästä päähän
				</Headline>
				<Paragraph>
				Tyynellä valtamerellä liikkuu parhaillaan taifuuni eli trooppinen hirmumyrsky Krathon. Myrsky on tällä hetkellä lähellä Filippiinien saarivaltion pohjoiskärkeä.
				</Paragraph>
				<ThemeButton toggleTheme={toggleTheme}/>
			</ThemeContext.Provider>
		</>
	)
}

export default App
