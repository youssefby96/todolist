import React, {useState } from 'react';
import InputTodo from '../src/Component/InputTodo';
import TodoList from '../src/Component/TodoList';
import "../src/App.css";
  
function App() {
  const [todos, setTodos] = useState([
    { id: 0, text: "mohamed" },
    { id: 1, text: "gadour" },
    { id: 2, text: "youssef" },
  ]);

  //   111111: callback function in  the parent
  const handleAdd = (textAdded) => {
    setTodos([...todos, { id: Math.random(), text: textAdded }]);
  };

  const handledelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handledit = (id, textEdited) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: textEdited } : todo
      )
    );
  };
  const handleComplete=(id)=>{
    setTodos(todos.map(todo=>
        todo.id===id? {...todo,isCompleted:!todo.isCompleted}  : todo
      ))
  }
  
  return (
    <div className="App">
       {/*2222: paass the callback as a props to the right place */}
      <InputTodo handleAdd={handleAdd} />
      <TodoList
        todos={todos}
        handledelete={handledelete}
        handledit={handledit}
        handleComplete={handleComplete}
      />
    </div>
  );
}
export default App;
