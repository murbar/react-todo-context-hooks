import React, { useContext } from 'react';
import TodosContext from '../context';

const TodoList = () => {
  const { state, dispatch } = useContext(TodosContext);

  return (
    <div>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <span
              data-complete={todo.complete}
              onClick={() => dispatch({ type: 'TOGGLE_TODO', id: todo.id })}
            >
              {todo.text}
            </span>
            <button>
              <img src="https://icon.now.sh/edit/eeeeee" alt="Edit" />
            </button>
            <button onClick={() => dispatch({ type: 'REMOVE_TODO', id: todo.id })}>
              <img src="https://icon.now.sh/delete/eeeeee" alt="Delete" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
