import React from 'react';
import { useRecoilState } from 'recoil';
import { todoInputState } from './state';

const TodoInput = ({ addTodo }) => {
  const [input, setInput] = useRecoilState(todoInputState);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = () => {
    if (input.trim() !== '') {
      addTodo(input);
      setInput('');  // Clear input after adding
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={input} 
        onChange={handleChange} 
        placeholder="Add a new task" 
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default TodoInput;
