package main

import (
	"html/template"
	"net/http"
)

type Item struct {
	Type 	string
	Count 	int
	Price	int
}

type ShoppingData struct {
	ShoppingList	string
	Items			[]Item
}

func main() {
	tmpl := template.Must(template.ParseFiles("layout.html"))
	http.HandleFunc("/",func(w http.ResponseWriter, r *http.Request) {
		data := ShoppingData{
			ShoppingList:"My ShoppingList",
			Items:[]Item{
				{Type:"Banana",Count:5,Price:5},
				{Type:"Apple",Count:15,Price:15},
				{Type:"Beer",Count:12,Price:12},
			},
		}
		tmpl.Execute(w,data)
	})
	http.ListenAndServe(":3000",nil)
}