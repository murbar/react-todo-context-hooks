import uuid from 'uuid/v4';

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map(task => {
          if (task.id === action.id) return { ...task, complete: !task.complete };
          return task;
        })
      };
    case 'ADD_TODO':
      const newTodo = {
        id: uuid(),
        text: action.text,
        complete: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };
    case 'SET_EDITING_TODO':
      return {
        ...state,
        currentlyEditing: state.todos.find(t => t.id === action.id)
      };
    case 'UPDATE_TODO':
      const updatedTodo = { ...state.currentlyEditing, text: action.text };
      const updatedTodoIndex = state.todos.findIndex(t => t.id === state.currentlyEditing.id);
      const todos = [
        ...state.todos.slice(0, updatedTodoIndex),
        updatedTodo,
        ...state.todos.slice(updatedTodoIndex + 1)
      ];
      return {
        ...state,
        currentlyEditing: {},
        todos
      };
    case 'REMOVE_TODO':
      const isRemovedTodo = state.currentlyEditing.id === action.id ? {} : state.currentlyEditing;
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id),
        currentlyEditing: isRemovedTodo
      };
    default:
      return state;
  }
};

export default reducer;
