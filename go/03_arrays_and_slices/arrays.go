package main

import "fmt"

func main() {

	//Arrays are fixed length and initialized to default values if not properly initialized with values
	
	var myArray [6]int
	
	fmt.Println("MyArray:",myArray)
	fmt.Println("MyArray length:",len(myArray))
	
	myArray[3] = 50
	
	fmt.Println("MyArray again:",myArray)
	
	myInitializedArray := [3]int{1,2,3}
	
	fmt.Println("Initialized array",myInitializedArray)
	
	fmt.Println("---- Slices ----");
	
	var mySlice []int //This is a slice. It is dynamically created and can change size. Does not reserve memory here
	
	myAllocatedSlice := make([]int,10) //Dynamically allocated slice of size 10

	fmt.Println("MySlice",mySlice)
	fmt.Println("MySlice length",len(mySlice))
	
	fmt.Println("My allocated slice",myAllocatedSlice)
	fmt.Println("My allocated slice length",len(myAllocatedSlice))
	
	//Adding to unallocated slice is done with append
	mySlice = append(mySlice,0)
	mySlice = append(mySlice,[]int{10,100}...)
	fmt.Println("MySlice",mySlice)
	fmt.Println("MySlice length",len(mySlice))	
	
	copiedSlice := make([]int,len(mySlice))
	
	copy(copiedSlice,mySlice)
	
	fmt.Println("Copied Slice",copiedSlice)

	partialSlice := mySlice[1:3]
	
	fmt.Println("Partial Slice",partialSlice)
	
	fmt.Println("--- Maps ---")
	
	//Maps use key value pairs. Use make to create maps
	
	intStrMap := make(map[int]string)
	strIntMap := make(map[string]int)
	
	intStrMap[1] = "One"
	intStrMap[2] = "Two"
	
	strIntMap["one"] = 1
	strIntMap["two"] = 2
	
	fmt.Println("intStrMap:",intStrMap)
	fmt.Println("strIntMap:",strIntMap)

	//Remove key and value using delete
	
	delete(strIntMap,"two")
	
	fmt.Println("strIntMap:",strIntMap)
	
	//Initial values on maps
	
	initialMap := map[int]string{1:"one",2:"two"}
	
	//Checking for keys and values in maps
	
	if val,ok := initialMap[2]; ok {
		fmt.Printf("Initialized map contains %s\n",val)
	}
	if _, ok := initialMap[3]; !ok {
		fmt.Println("Initialized map does not contain that value or key")
	}
}