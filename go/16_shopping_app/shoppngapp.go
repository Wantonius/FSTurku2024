package main

import (
	"net/http"
	"fmt"
	"encoding/json"
	"strconv"
	"math/rand"
	"time"
)

type Item struct {
	Id		string	`json:"_id"`
	Type	string	`json:"type"`
	Count	string	`json:"count"`
	Price	string	`json:"price"`
}

type User struct {
	Username 	string	`json:"username"`
	Password	string	`json:"password"`
}

type Session struct {
	TTL			int64
	Token		string
}


type MyToken struct {
	Token 		string	`json:"token"`
}

type BackendMessage struct {
	Message		string	`json:"message"`
}

const time_to_live = 3600
var ShoppingItems []item
var RegisteredUsers []User
var LoggedSessions []Session
var id int64
type Middleware func(http.HandlerFunc) http.HandlerFunc
var letters = []rune("abcdefghjiklmnopqrstuABCDEFGHIJKLMNOPQRSTU")

func HandleGetAndPost(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
		case http.MethodGet:
			json.newEncoder(w).Encode(ShoppingItems)
		case http.MethodPost:
			var item Item
			json.newDecoder(r.Body).Decode(&item)
			item.Id = strconv.FormatInt(int64(id),10)
			id++
			ShoppingItems = append(ShoppingItems,item)
			message := BackendMessage{Message:"Created"}
			w.WriteHeader(http.StatusCreated)
			json.newEncoder(w).Encode(message)
		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
			message := BackendMessage{Message:"Unknown Method"}
			json.newEncoder(w).Encode(message)
	}		
}

func HandleDeleteAndPut(w http.ResponseWriter, r *http.Request) {
	temp_string := r.URL.String()
	tempId := temp_string[len(temp_string)-3:]
	switch r.Method {
		case http.MethodDelete:
			for i,item := range ShoppingItems {
				if item.Id == tempId {
					ShoppingItems = append(ShoppingItems[:i],ShoppingItems[i+1:])
				}
			}
			message := BackendMessage{Message:"Success"}
			json.NewEncoder(w).Encode(message)
		case http.MethodPut:
			var t_item Item
			json.newDecoder(r.Body).Decode(&t_item)
			for i,item := range ShoppingItems {
				if item.Id == tempId {
						t_item.Id = tempId
						ShoppingItems[i] = t_item
					}
			}
			message := BackendMessage{Message:"Success"}
			json.NewEncoder(w).Encode(message)
		default:
			w.WriteHeader(http.StatusMethodNotAllowed)
			message := BackendMessage{Message:"Unknown Method"}
			json.newEncoder(w).Encode(message)
	}
}

func CreateToken() string {
	rand.Seed(time.Now().UnixNano())
	b := make([]rune,64)
	for i :=  range b {
		b[i] = letters[rand.Intn(len(letters))]
	}
	return string(b)
}

func main() {

	fs := http.FileServer(http.Dir("static/"))
	http.Handle("/",fs)
	
	fmt.Println("Server running in port 3000")
	http.ListenAndServe(":3000",nil)
}