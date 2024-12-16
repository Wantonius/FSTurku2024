fn main() {

	//There are two different strings in Rust. String type and lighter string reference &str

	let name = "Bingo";
	let other_name = String::from("Adrian Tepes");
	println!("My name is {1} and this is my dog {0}",name,other_name);
	
	//&str is dynamically sized and is a reference. String is an owned type and has a specific sized
	
	println!("A String is always {:?} bytes. It is Sized.",std::mem::size_of::<String>());
	println!("A &str can be anything {:?}. It is not Sized",std::mem::size_of_val("Bingo"));
	
	let name = "Jim Bob";
	let country = "USA";
	let home = "Alabama";
	
	let together = format!("I am {} and I come from {}. I live in {}.",name,country,home);
	
	println!("{}",together);
}

