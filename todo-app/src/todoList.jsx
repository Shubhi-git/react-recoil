import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { todoListState } from './state';

const TodoList = () => {
  const todoList = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState);

  const deleteTodo = (index) => {
    setTodoList((oldList) => oldList.filter((_, i) => i !== index));
  };

  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index}>
          {todo}
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
