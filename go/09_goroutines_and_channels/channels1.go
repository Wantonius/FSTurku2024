package main

import (
	"time"
	"fmt"
)

func worker(done chan bool) {
	fmt.Println("Worker: Let's do some work")
	time.Sleep(3*time.Second)
	fmt.Println("Worker: Done")
	fmt.Println("Worker: Sending done to channel")
	done<-true
}

func main() {

	messages := make(chan string)
	
	//Creates a new channel. Channels are typed by the values they convey. By default both send and receive block until both are ready

	go func() {
		fmt.Println("Pinger: Pinging main")
		messages <- "Ping"
	}()
	fmt.Println("Main: reading the channel")
	msg := <-messages
	fmt.Println(msg)
	
	time.Sleep(1*time.Second)
	
	fmt.Println("----- Buffered channels --------")
	
	buffered := make(chan string,2)
	
	buffered <- "buffered"
	buffered <- "channel"
	
	fmt.Print(<-buffered)
	fmt.Println(<-buffered)
	
	fmt.Println("------- Channel Synchro -------")
	
	done := make(chan bool)
	
	go worker(done)
	fmt.Println("Main: Wait for the worker")
	<-done
	fmt.Println("Main: Worker done. Exiting")
}