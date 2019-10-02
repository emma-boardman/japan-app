export const TOGGLE_TODO_COMPLETION = "TOGGLE_TODO_COMPLETION";

export const toggleToDoCompletetion = (todoId) => {
    return {
        type: TOGGLE_TODO_COMPLETION,
        todoId: todoId
    }
}