package main

import "fmt"

func willExecuteLast(greet string) {
	fmt.Printf("Goodbye %s. I was deferred last in the calling function.\n",greet)
}

func callsAdditionalDefer(greet string) {
	defer willExecuteLast(greet)
	fmt.Println("I will be before first goodbye")
}

func helloGreeting(greet string) {
	fmt.Printf("Hello %s, I will execute first\n",greet)
}

func panics() {
	panic("Calamity Ensues")
}

func main() {

	defer func() {
		if r := recover(); r != nil {
			fmt.Printf("It panicked but we recovered. Error: %s\n",r)
		}
	}()

	defer panics();

	defer willExecuteLast("John")
	defer callsAdditionalDefer("Johnny")
	
	fmt.Println("First we test defer")
	helloGreeting("John")
}