import TODOS from "../../data/dummy-data";
import { TOGGLE_TODO_COMPLETION } from "../actions/todos";
import ToDo from "../../models/to-do-item";

const initialState = {
  todos: TODOS
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_TODO_COMPLETION:
    //   var updatedTodos = [...state.todos];
    //   var todoIndex = updatedTodos.findIndex(x => x.id === action.todoId);
    //   updatedTodos[todoIndex].complete = !updatedTodos[todoIndex].complete;
      var newState = state.todos.map((item, index) => {
          if (item.id === action.todoId){
              var updatedToDo = new ToDo (
                  item.id,
                  item.title,
                  item.imgURL,
                  item.descriptionWhy,
                  item.descriptionWhere,
                  !item.complete
              )
              return updatedToDo
          }
          return item;
      })

      return {
        ...state,
        todos: newState
      };
  }
  return state;
};
