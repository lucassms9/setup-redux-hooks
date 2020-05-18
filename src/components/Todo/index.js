import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as TodoActions from '../../store/reducers/Todo/actions';

export default function Todo() {
  const [todo, setTodo] = useState(null);
  const todos = useSelector((state) => state.todo.todo);
  const dispatch = useDispatch();

  function handleInputTodo(e) {
    setTodo(e.target.value);
  }
  function addTodo() {
    dispatch(TodoActions.addTodoAct(todo));
  }
  return (
    <>
      <h2>Add Todos</h2>
      <input onChange={handleInputTodo} />
      <button type="button" onClick={() => addTodo()}>
        Add Todo
      </button>

      <hr />
      <h2>Lista de Todos</h2>
      <ul>
        {todos.map((todoItem) => {
          return <li key={todoItem}>{todoItem}</li>;
        })}
      </ul>
    </>
  );
}
