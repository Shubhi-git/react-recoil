import React from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from './state';
import TodoInput from './todoInput';
import TodoList from './todoList';
import './App.css'

const App = () => {
  const setTodoList = useSetRecoilState(todoListState);

  const addTodo = (todo) => {
    setTodoList((oldList) => [...oldList, todo]);
  };

  return (
    <div>
      <h1>Todo App</h1>
      <TodoInput addTodo={addTodo} />
      <TodoList />
    </div>
  );
};

export default App;
