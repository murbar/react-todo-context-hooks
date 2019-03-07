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
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.id)
      };
    default:
      return state;
  }
};

export default reducer;
