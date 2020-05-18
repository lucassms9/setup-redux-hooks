import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActions from '../../store/reducers/Todo/actions';

function Todo({ todos, addTodoAct }) {
  const [todo, setTodo] = useState(null);
  console.log(todos);
  function handleInputTodo(e) {
    setTodo(e.target.value);
  }
  function addTodo() {
    addTodoAct(todo);
  }
  return (
    <>
      <h2>Add Todos</h2>
      <input onChange={handleInputTodo} />
      <button onClick={() => addTodo()}>Add Todo</button>

      <hr />
      <h2>Lista de Todos</h2>
      <ul>
        {todos.map((todo) => {
          console.log(todo);
          return <li key={todo}>{todo}</li>;
        })}
      </ul>
    </>
  );
}
const mapStateToPros = (state) => ({
  todos: state.todo.todo,
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(TodoActions, dispatch);

export default connect(mapStateToPros, mapDispatchToProps)(Todo);
