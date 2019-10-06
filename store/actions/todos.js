export const TOGGLE_TODO_COMPLETION = "TOGGLE_TODO_COMPLETION";

export const toggleToDoCompletion = (todoId) => {
    return {
        type: TOGGLE_TODO_COMPLETION,
        todoId: todoId
    }
}