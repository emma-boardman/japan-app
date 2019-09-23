import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ToDoItem from "./components/ToDoItem";

export default function App() {
  const [listItems, setListItems] = useState([
    {
      key: "1",
      text: "Buy coffee from a vending machine",
      completed: true
    },
    {
      key: "2",
      text: "Watch a sumo practice",
      completed: false
    }
  ]);

  const handleCompletedToggle = (itemKey) => {
    console.log(itemKey);
    var newList = [...listItems];
    var itemIndex = newList.findIndex(x => x.key === itemKey);
    newList[itemIndex].completed = !newList[itemIndex].completed
    setListItems(newList)
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={listItems}
        renderItem={itemData => (
          <ToDoItem
            id={itemData.item.key}
            text={itemData.item.text}
            completed={itemData.item.completed}
            onToggle={handleCompletedToggle}
          />
        )}
        style={styles.content}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: "10%"
  },
  content: {
    flex: 1
  }
});
