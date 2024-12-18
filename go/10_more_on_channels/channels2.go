package main

import (
	"fmt"
	"time"
)

func worker(ch chan string, s time.Duration) {
	time.Sleep(s*time.Millisecond)
	ch <- "worker done"
}

func main() {
	channel := make(chan string)
	channel2 := make(chan string)
	
	fmt.Println("Starting workers")
	
	go worker(channel,3500)
	go worker(channel2,6500)
	
	//Select waits for multiple channel sources like a switch-case. Default is for cases where no channel is active and can be used for non-blocking operations.
	
	L:
	for {
		time.Sleep(1000*time.Millisecond)
		select {
			case v := <-channel:
				fmt.Printf("Worker 1 done. Worker says %s\n",v)
			case v := <-channel2:
				fmt.Printf("Worker 2 done. Worker says %s\n",v)
				break L
			default:
				fmt.Println("No active channel. Waiting for workers")
		}
	}
	
	fmt.Println("Closing channels and buffered channels")
	
	jobs := make(chan int,5)
	done := make(chan bool)
	
	go func() {
		for {
			fmt.Println("Worker:Waiting for more jobs")
			j, more := <- jobs
			if more {
				fmt.Println("Worker: Received job",j)
			} else {
				fmt.Println("Worker: Received all jobs")
				done <- true
			}
		}
	}()
	
	for j := 1; j < 5; j++ {
		fmt.Println("Main: Sending job ",j)
		jobs <- j
		fmt.Println("Main: Sent job ",j)
		time.Sleep(1000*time.Millisecond)
	}
	close(jobs)
	fmt.Println("Main: Sent all jobs")
	<-done
}