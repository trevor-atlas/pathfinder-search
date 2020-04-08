package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"os"
	"pathfinder-search/backend/models"
	"strings"
)

var monsters []models.Monster
var items []models.Item
var feats []models.Feat
var spells []models.Spell

func init() {
	monsters = make([]models.Monster, 10000)
	items = make([]models.Item, 10000)
	feats = make([]models.Feat, 10000)
	spells = make([]models.Spell, 10000)

	pwd, _ := os.Getwd()

	bestiaryJSON, err := ioutil.ReadFile(pwd+"/static/bestiary.json")
	if err != nil {
		fmt.Println(err.Error())
	}
	itemsJSON, err := ioutil.ReadFile(pwd+"/static/items.json")
	if err != nil {
		fmt.Println(err.Error())
	}
	featsJSON, err := ioutil.ReadFile(pwd+"/static/feats.json")
	if err != nil {
		fmt.Println(err.Error())
	}
	spellJSON, err := ioutil.ReadFile(pwd+"/static/spells.json")
	if err != nil {
		fmt.Println(err.Error())
	}

	_ = json.Unmarshal([]byte(bestiaryJSON), &monsters)
	_ = json.Unmarshal([]byte(itemsJSON), &items)
	_ = json.Unmarshal([]byte(featsJSON), &feats)
	_ = json.Unmarshal([]byte(spellJSON), &spells)

}


func searchMonsters(query string) []models.Monster {
	var output []models.Monster

	for _, monster := range monsters {
		if strings.Contains(strings.ToLower(monster.Name), strings.ToLower(query)) {
			output = append(output, monster)
		}
	}
	return output
}

func searchItems(query string) []models.Item {
	var output []models.Item

	for _, item := range items {
		if strings.Contains(strings.ToLower(item.Name), strings.ToLower(query)) {
			output = append(output, item)
		}
	}
	return output
}

func searchSpells(query string) []models.Spell {
	var output []models.Spell

	for _, spell := range spells {
		if strings.Contains(strings.ToLower(spell.Name), strings.ToLower(query)) {
			output = append(output, spell)
		}
	}
	return output
}

func searchFeats(query string) []models.Feat {
	var output []models.Feat
	fmt.Println(len(feats))

	for _, feat := range feats {
		if strings.Contains(strings.ToLower(feat.Name), strings.ToLower(query)) {
			output = append(output, feat)
		}
	}
	return output
}

func JSONMarshal(t interface{}, w http.ResponseWriter) error {
	encoder := json.NewEncoder(w)
	encoder.SetEscapeHTML(false)
	return encoder.Encode(t)
}

func setupResponse(w *http.ResponseWriter, req *http.Request) {
	(*w).Header().Set("Access-Control-Allow-Origin", "*")
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Accept, Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization")
}

func query(w http.ResponseWriter, req *http.Request) {
	queryType := req.URL.Query().Get("type")
	qp := req.URL.Query().Get("query")
	setupResponse(&w, req)
	if req.Method == "OPTIONS" {
		w.Write(nil)
		return
	}
	fmt.Println("type: %s", queryType)
	fmt.Println("query: %s", qp)

	var res []byte
	var err error

	switch queryType {
	case "monsters":
		data := searchMonsters(qp)
		err = JSONMarshal(data, w)
	case "items":
		data := searchItems(qp)
		err = JSONMarshal(data, w)
	case "feats":
		data := searchFeats(qp)
		err = JSONMarshal(data, w)
	case "spells":
		data := searchSpells(qp)
		err = JSONMarshal(data, w)
	}

	if err != nil {
		w.Write([]byte(`{ message: Error retrieving data. }`))
	}
	w.Write(res)
}

func main() {
	http.HandleFunc("/", query)
	fmt.Println("listening on localhost:8080")
	http.ListenAndServe(":8080", nil)
}
