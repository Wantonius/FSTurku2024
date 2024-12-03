import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Pressable } from 'react-native';
import {useState} from 'react';
export default function App() {
	
	const [state,setState] = useState({
		list:[
	{
		"firstname": "Herrod",
		"lastname": "Carney",
		"id": 1
	},
	{
		"firstname": "Sydnee",
		"lastname": "Wallace",
		"id": 2
	},
	{
		"firstname": "Vanna",
		"lastname": "Summers",
		"id": 3
	},
	{
		"firstname": "Jorden",
		"lastname": "Charles",
		"id": 4
	},
	{
		"firstname": "Lesley",
		"lastname": "Callahan",
		"id": 5
	},
	{
		"firstname": "Rebecca",
		"lastname": "Hart",
		"id": 6
	},
	{
		"firstname": "Cameran",
		"lastname": "Dillard",
		"id": 7
	},
	{
		"firstname": "Nash",
		"lastname": "Lancaster",
		"id": 8
	},
	{
		"firstname": "Felicia",
		"lastname": "Weiss",
		"id": 9
	},
	{
		"firstname": "Chadwick",
		"lastname": "Whitfield",
		"id": 10
	},
	{
		"firstname": "Callum",
		"lastname": "Heath",
		"id": 11
	},
	{
		"firstname": "Rae",
		"lastname": "Vazquez",
		"id": 12
	},
	{
		"firstname": "Xander",
		"lastname": "Cash",
		"id": 13
	},
	{
		"firstname": "Charissa",
		"lastname": "Tran",
		"id": 14
	},
	{
		"firstname": "Salvador",
		"lastname": "Martin",
		"id": 15
	},
	{
		"firstname": "Arthur",
		"lastname": "Johns",
		"id": 16
	},
	{
		"firstname": "Alma",
		"lastname": "Wade",
		"id": 17
	},
	{
		"firstname": "Oscar",
		"lastname": "Boyd",
		"id": 18
	},
	{
		"firstname": "Zephr",
		"lastname": "Martinez",
		"id": 19
	},
	{
		"firstname": "Jin",
		"lastname": "Bray",
		"id": 20
	},
	{
		"firstname": "Joan",
		"lastname": "Richards",
		"id": 21
	},
	{
		"firstname": "Ian",
		"lastname": "Powell",
		"id": 22
	},
	{
		"firstname": "Hanna",
		"lastname": "Jensen",
		"id": 23
	},
	{
		"firstname": "Talon",
		"lastname": "Randolph",
		"id": 24
	},
	{
		"firstname": "Murphy",
		"lastname": "Graham",
		"id": 25
	},
	{
		"firstname": "Winifred",
		"lastname": "Langley",
		"id": 26
	},
	{
		"firstname": "Raja",
		"lastname": "Pacheco",
		"id": 27
	},
	{
		"firstname": "Walter",
		"lastname": "Marshall",
		"id": 28
	},
	{
		"firstname": "Nina",
		"lastname": "Hurley",
		"id": 29
	},
	{
		"firstname": "Skyler",
		"lastname": "Aguilar",
		"id": 30
	},
	{
		"firstname": "Alice",
		"lastname": "King",
		"id": 31
	},
	{
		"firstname": "Thomas",
		"lastname": "Snider",
		"id": 32
	},
	{
		"firstname": "Craig",
		"lastname": "Hartman",
		"id": 33
	},
	{
		"firstname": "Curran",
		"lastname": "Acosta",
		"id": 34
	},
	{
		"firstname": "Elvis",
		"lastname": "Barrett",
		"id": 35
	},
	{
		"firstname": "Raymond",
		"lastname": "Boone",
		"id": 36
	},
	{
		"firstname": "Geoffrey",
		"lastname": "Dunlap",
		"id": 37
	},
	{
		"firstname": "Kenneth",
		"lastname": "Powers",
		"id": 38
	},
	{
		"firstname": "Thomas",
		"lastname": "Dudley",
		"id": 39
	},
	{
		"firstname": "Gloria",
		"lastname": "O'donnell",
		"id": 40
	},
	{
		"firstname": "Olympia",
		"lastname": "Barber",
		"id": 41
	},
	{
		"firstname": "Quin",
		"lastname": "Delaney",
		"id": 42
	},
	{
		"firstname": "Aristotle",
		"lastname": "Santana",
		"id": 43
	},
	{
		"firstname": "Orson",
		"lastname": "Hooper",
		"id": 44
	},
	{
		"firstname": "Emerson",
		"lastname": "Sanford",
		"id": 45
	},
	{
		"firstname": "Alea",
		"lastname": "White",
		"id": 46
	},
	{
		"firstname": "Geraldine",
		"lastname": "Davis",
		"id": 47
	},
	{
		"firstname": "Kibo",
		"lastname": "Mcintosh",
		"id": 48
	},
	{
		"firstname": "Dillon",
		"lastname": "Glover",
		"id": 49
	},
	{
		"firstname": "Morgan",
		"lastname": "Shannon",
		"id": 50
	},
	{
		"firstname": "Isabelle",
		"lastname": "Kelly",
		"id": 51
	},
	{
		"firstname": "Odessa",
		"lastname": "Shaffer",
		"id": 52
	},
	{
		"firstname": "Kameko",
		"lastname": "Thornton",
		"id": 53
	},
	{
		"firstname": "Tamekah",
		"lastname": "Wells",
		"id": 54
	},
	{
		"firstname": "Dylan",
		"lastname": "Russo",
		"id": 55
	},
	{
		"firstname": "Ira",
		"lastname": "Steele",
		"id": 56
	},
	{
		"firstname": "Lucius",
		"lastname": "Collins",
		"id": 57
	},
	{
		"firstname": "Debra",
		"lastname": "Peck",
		"id": 58
	},
	{
		"firstname": "Beverly",
		"lastname": "Wyatt",
		"id": 59
	},
	{
		"firstname": "Darryl",
		"lastname": "Howell",
		"id": 60
	},
	{
		"firstname": "Damian",
		"lastname": "Patrick",
		"id": 61
	},
	{
		"firstname": "Joy",
		"lastname": "Steele",
		"id": 62
	},
	{
		"firstname": "Kasimir",
		"lastname": "Aguirre",
		"id": 63
	},
	{
		"firstname": "Randall",
		"lastname": "Higgins",
		"id": 64
	},
	{
		"firstname": "Emery",
		"lastname": "Hansen",
		"id": 65
	},
	{
		"firstname": "Kaye",
		"lastname": "Smith",
		"id": 66
	},
	{
		"firstname": "Aquila",
		"lastname": "Mason",
		"id": 67
	},
	{
		"firstname": "Carlos",
		"lastname": "Hogan",
		"id": 68
	},
	{
		"firstname": "Lucian",
		"lastname": "Chandler",
		"id": 69
	},
	{
		"firstname": "Leila",
		"lastname": "Orr",
		"id": 70
	},
	{
		"firstname": "Jonah",
		"lastname": "Boone",
		"id": 71
	},
	{
		"firstname": "Cadman",
		"lastname": "Richard",
		"id": 72
	},
	{
		"firstname": "Tallulah",
		"lastname": "Bowen",
		"id": 73
	},
	{
		"firstname": "Lacey",
		"lastname": "Oliver",
		"id": 74
	},
	{
		"firstname": "Ulric",
		"lastname": "Mcfarland",
		"id": 75
	},
	{
		"firstname": "Hanae",
		"lastname": "Myers",
		"id": 76
	},
	{
		"firstname": "Thor",
		"lastname": "Kerr",
		"id": 77
	},
	{
		"firstname": "Aquila",
		"lastname": "Buckley",
		"id": 78
	},
	{
		"firstname": "Demetria",
		"lastname": "Haney",
		"id": 79
	},
	{
		"firstname": "Lois",
		"lastname": "Zamora",
		"id": 80
	},
	{
		"firstname": "Jordan",
		"lastname": "Briggs",
		"id": 81
	},
	{
		"firstname": "Lavinia",
		"lastname": "Rojas",
		"id": 82
	},
	{
		"firstname": "Jack",
		"lastname": "Wilkerson",
		"id": 83
	},
	{
		"firstname": "Deacon",
		"lastname": "Mclean",
		"id": 84
	},
	{
		"firstname": "Amal",
		"lastname": "Adams",
		"id": 85
	},
	{
		"firstname": "Abbot",
		"lastname": "Bailey",
		"id": 86
	},
	{
		"firstname": "Caleb",
		"lastname": "Crane",
		"id": 87
	},
	{
		"firstname": "Galvin",
		"lastname": "Schneider",
		"id": 88
	},
	{
		"firstname": "Medge",
		"lastname": "Benjamin",
		"id": 89
	},
	{
		"firstname": "Graiden",
		"lastname": "Wagner",
		"id": 90
	},
	{
		"firstname": "Candice",
		"lastname": "Shannon",
		"id": 91
	},
	{
		"firstname": "Maya",
		"lastname": "Cook",
		"id": 92
	},
	{
		"firstname": "Dolan",
		"lastname": "Williams",
		"id": 93
	},
	{
		"firstname": "Eugenia",
		"lastname": "Goodwin",
		"id": 94
	},
	{
		"firstname": "Martina",
		"lastname": "Fischer",
		"id": 95
	},
	{
		"firstname": "Madeline",
		"lastname": "Carr",
		"id": 96
	},
	{
		"firstname": "Cara",
		"lastname": "Morales",
		"id": 97
	},
	{
		"firstname": "Graiden",
		"lastname": "Neal",
		"id": 98
	},
	{
		"firstname": "Fredericka",
		"lastname": "Britt",
		"id": 99
	},
	{
		"firstname": "Kirk",
		"lastname": "Stuart",
		"id": 100
	}
]
	})
	
	const removeItem = (id) => {
		setState((state) => {
			let tempList = state.list.filter(item => item.id !== id);
			return {
				list:tempList
			}
		})
	}
	
	return (
		<View style={styles.container}>
			<FlatList data={state.list}
					renderItem={({item}) => {
						return (
							<View style={styles.rowStyle}>
								<Text style={styles.textStyle}>
									{item.firstname} {item.lastname}
								</Text>
								<Pressable style={styles.buttonStyle}
										onPress={() => removeItem(item.id)}>
									<Text>Remove</Text>
								</Pressable>
							</View>
						)
					}}/>
		<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowStyle:{
	  flexDirection:"row",
	  height:80,
	  alignItems:"center",
	  justifyContent:"space-between"
  },
  textStyle:{
	  fontFamily:"sans-serif",
	  fontSize:18,
	  fontWeight:"bold"
  },
  buttonStyle:{
	  width:80,
	  height:50,
	  borderRadius:5,
	  backgroundColor:"red",
	  alignItems:"center",
	  justifyContent:"center"
  }
});
