import React from "react";
import { StyleSheet } from "react-native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import todoReducer from "./store/reducers/todos";
import MainNavigator from "./navigation/MainNavigator";

const rootReducer = combineReducers({
  todos: todoReducer
});

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
}
