import React from 'react';

const TodosContext = React.createContext({
  todos: [
    {
      id: 1,
      text: 'eat breaky',
      complete: false
    },
    {
      id: 2,
      text: 'do laundry',
      complete: false
    },
    {
      id: 3,
      text: 'walk dogs',
      complete: true
    }
  ]
});

export default TodosContext;
