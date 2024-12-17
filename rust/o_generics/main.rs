use std::fmt::Debug;

#[derive(Debug)]
#[allow(dead_code)]
struct Animal {
	name:String,
	age:u8,
}

fn print_item<T:Debug>(item:T) {
	println!("Here is your debug item: {:?}",item);
}

fn main() {
	let charlie = Animal {
		name:"Charlie".to_string(),
		age:1,
	};
	
	let number = 10;
	
	print_item(charlie);
	print_item(number);
}
