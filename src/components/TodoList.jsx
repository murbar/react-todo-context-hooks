import React, { useContext } from 'react';
import TodosContext from '../context';

const TodoList = () => {
  const { state, dispatch } = useContext(TodosContext);
  return (
    <div>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button>
              <img src="https://icon.now.sh/edit/eeeeee" alt="Edit" />
            </button>
            <button>
              <img src="https://icon.now.sh/delete/eeeeee" alt="Delete" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
