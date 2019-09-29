import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ToDoOverviewScreen from "../screens/ToDoOverviewScreen";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";


const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Colors.primaryRed
  }
};

const ToDoNavigator = createStackNavigator(
  {
    ToDoOverview: ToDoOverviewScreen
  },
  {
    defaultNavigationOptions: defaultNavOptions
  }
);

export default createAppContainer(ToDoNavigator);
