import React from "react";
import { View, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";

import ToDoItem from "../containers/ToDoItem";
import * as todoActions from "../store/actions/todos";

const ToDoOverviewScreen = props => {
  const todos = useSelector(state => state.todos.todos);
  console.log("?", todos);

  const handleCompletedToggle = itemId => {
    dispatch(todoActions.toggleToDoCompletetion(itemId));
  };

  const dispatch = useDispatch();

  return (
    <FlatList
      data={todos}
      keyExtractor={todo => todo.id}
      renderItem={({ item, index }) => (
        <ToDoItem
          id={item.id}
          title={item.title}
          imgURL={item.imgURL}
          descriptionWhy={item.descriptionWhy}
          descriptionWhere={item.descriptionWhere}
          complete={item.complete}
          onToggle={handleCompletedToggle}
          isOddRow={index % 2 !== 0}
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
