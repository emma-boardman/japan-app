import React, { useState } from "react";
import { View, FlatList } from "react-native";
import { useSelector } from "react-redux";

import ToDoItem from "../containers/ToDoItem";
import ToDoItemOdd from "../containers/ToDoItemOdd";

const ToDoOverviewScreen = props => {
  //   [todos, setToDos] = useState(useSelector(state => state.todos.todos))
  const todos = useSelector(state => state.todos.todos);
  console.log(todos[0].imgURl);
  const handleCompletedToggle = itemId => {
    console.log(itemId);
    // var newList = [...todos];
    // var itemIndex = newList.findIndex(x => x.id === itemId);
    // newList[itemIndex].complete = !newList[itemIndex].complete;
    // setToDos(newList);
  };

  return (
    <FlatList
      data={todos}
      keyExtractor={todo => todo.id}
      renderItem={({ item, index }) =>
        index % 2 == 0 ?
          <ToDoItem
            id={item.id}
            title={item.title}
            imgURL={item.imgURL}
            descriptionWhy={item.descriptionWhy}
            descriptionWhere={item.descriptionWhere}
            complete={item.complete}
            onToggle={handleCompletedToggle}
          />
        : 
          <ToDoItemOdd
            id={item.id}
            title={item.title}
            imgURL={item.imgURL}
            descriptionWhy={item.descriptionWhy}
            descriptionWhere={item.descriptionWhere}
            complete={item.complete}
            onToggle={handleCompletedToggle}
          />
        
      }
    />
  );
};

ToDoOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: "Japan App"
  };
};

export default ToDoOverviewScreen;
