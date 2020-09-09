import React from 'react';
import Todo from "../Component/Todo";

const TodoList = ({ todos, handledelete , handledit , handleComplete }) => {
  console.log(todos);
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} handledelete={handledelete}  handledit={handledit} handleComplete={handleComplete} />
      ))}
    </div>
  );
};
export default TodoList;
