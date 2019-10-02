import ToDoItem from "../models/to-do-item";

const TODOS = [
  new ToDoItem(
    "t1",
    "Buy coffee from a vending machine",
    "url.png",
    "narrow",
    "Because",
    "Literally anywhere",
    true
  ),
  new ToDoItem(
    "t2",
    "Buy ramen from a ticket machine",
    "url.png",
    "wide",
    "Because",
    "Literally anywhere",
    false
  ),

];

export default TODOS;
