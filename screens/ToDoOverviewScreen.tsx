import React, { useState } from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";

import ToDoItem from "../containers/ToDoItem";

const ToDoOverviewScreen = props => {
//   [todos, setToDos] = useState(useSelector(state => state.todos.todos))
  const todos = useSelector(state => state.todos.todos);
  console.log(todos[0].imgURl)
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
      renderItem={itemData => (
        <ToDoItem
          id={itemData.item.id}
          title={itemData.item.title}
          imgURL={itemData.item.imgURL}
          descriptionWhy={itemData.item.descriptionWhy}
          descriptionWhere={itemData.item.descriptionWhere}
          complete={itemData.item.complete}
          onToggle={handleCompletedToggle}
        />
      )}
    />
  );
};

ToDoOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: "Japan App"
  };
};

export default ToDoOverviewScreen;
