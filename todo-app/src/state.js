import { atom } from 'recoil';

const loadTodoList = () => {
  const savedTodos = localStorage.getItem('todos');
  return savedTodos ? JSON.parse(savedTodos) : [];
};

const saveTodoList = (newTodoList) => {
  localStorage.setItem('todos', JSON.stringify(newTodoList));
};

export const todoListState = atom({
  key: 'todoListState',
  default: loadTodoList(),
  effects_UNSTABLE: [
    ({ onSet }) => {
      onSet((newValue) => {
        saveTodoList(newValue);
      });
    },
  ],
});

export const todoInputState = atom({
  key: 'todoInputState',
  default: '',
});