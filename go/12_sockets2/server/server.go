package main

import (
	"bufio"
	"fmt"
	"net"
)

func handleConnection(conn net.Conn) {
	var stringbuffer string
	for stringbuffer != "quit" {
		buffer,err := bufio.NewReader(conn).ReadBytes('\n')
		if err != nil {
			fmt.Println("Client left")
			conn.Close()
			return
		}
		stringbuffer = string(buffer[:len(buffer)-1])
		fmt.Printf("%s\n",stringbuffer)
	}
	conn.Close()
}

func main() {
	fmt.Println("Accepting connections at 5000")
	l, err := net.Listen("tcp",":5000")

	if err != nil {
		fmt.Println("Error creating and listening socket:",err.Error())
		return
	}
	defer l.Close()
	
	for {
		c,err := l.Accept()
		if err != nil {
			fmt.Println("Error accepting connection:",err.Error())
			continue
		}
		fmt.Println("Client "+c.RemoteAddr().String()+" connected")
	
		go handleConnection(c)
	}
}