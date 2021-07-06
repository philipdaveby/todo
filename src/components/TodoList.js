import React, { useState, useEffect } from 'react';
import TodoCard from './TodoCard';
import InputField from './InputField';

const TodoList = () => {
  const [todos, setTodos] = useState('');
  const [counter, setCounter] = useState(todos.length);

  useEffect(() => () => {
    setTodos('');
  }, []);

  const addTodo = todo => {
    if (!todo.title) {
      const errorTag = document.querySelector('.main__form__error-message');
      errorTag.textContent = 'It is required to set a Title';
      setTimeout(() => {
        errorTag.textContent = '';
      }, 5000);
      return;
    }
    setTodos(prevState => [...prevState, todo]);
    setCounter(prevState => prevState + 1);
  };

  const updateDone = id => {
    const todoIndex = todos.findIndex(todo => todo.key === id);
    todos[todoIndex].done = !todos[todoIndex].done;
    document.querySelector(`li[id="${id}"`).classList.toggle('main__todo__card--done');

    setTodos(todos);
  };

  const removeCard = id => {
    const updatedArr = todos.filter(todo => todo.key !== id);

    setTodos(updatedArr);
  };

  return (
    <main className="main__todolist">
      <section className="main__form">
        <h2 className="main__form__h2">Register new ToDo</h2>
        <InputField addTodo={addTodo} todoKey={counter} />
        <p className='main__form__error-message'></p>
      </section>
      <section className="main__todo">
        <ul className="main__todo__cards">
        { todos ? todos.map(todo => (
        <li key={todo.key} id={todo.key} className={'main__todo__card' } onClick={() => updateDone(todo.key)}>
          <TodoCard cardKey={todo.key} removeCard={removeCard} cardTitle={todo.title}
          cardContent={todo.content} />
        </li>)) : '' }
        </ul>
      </section>
    </main>
  );
};

export default TodoList;
