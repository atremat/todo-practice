import { FiSearch } from 'react-icons/fi';
import { addTodo } from 'reduxTodo/todoSlice';
import { useState } from 'react';
import style from './Form.module.css';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

export const Form = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const todoObj = {
      id: nanoid(),
      text: inputValue,
    };
    dispatch(addTodo(todoObj));
    setInputValue('');
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        required
        autoFocus
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
    </form>
  );
};
