fn main() {

	let x = 5;
	println!("{}",x);
	//x = 6;

	//Variable is immutable and the value cannot be changed.
	
	let mut x = 5;
	println!("{}",x);
	x = 6;
	println!("{}",x);
	
	//Shadowing a variable within an inner scope
	
	let z = 5;
	
	let z = z + 1;
	{
		let z = z + 2;
		println!("Value of z in inner scope {}",z);
	}
	println!("Value of z in outer scope {}",z);
}