fn main() {

	for number in 0..10 {
		println!("The number is {}",number);
	}
	
	for number in 0..=10 {
		println!("The number is {}",number);
	}
	
	let mut counter = 0;
	
	loop {
		counter += 1;
		println!("Value of the counter is {}",counter);
		if counter == 3 {
			break;
		}
	}
	
	println!("After loop");
	
	//Named loops
	
	let mut counter = 0;
	let mut counter2 = 0;
	
	'first_loop:loop {
		counter += 1;
		println!("Value of the counter is {}",counter);
		if counter > 9 {
			println!("Now entering inner loop");
			loop {
				counter2 += 1;
				println!("Value of the second counter is {}",counter2);
				if counter2 == 3 {
					break 'first_loop;
				}
			}
		}
	}
	println!("After loops");

	let mut counter = 0;
	
	while counter < 5 {
		counter += 1;
		println!("Value of the counter is {}",counter);
	}
}