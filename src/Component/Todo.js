import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import EditModal from "./EditModal";

const Todo = ({ todo, handledelete, handledit, handleComplete }) => {
  const delett = () => {
    handledelete(todo.id);
  };
  const complete = () => {
    handleComplete(todo.id);
  };
    
    

    return (
      <div className="styletodo" style={{ display: "flex" }} >
        
        
        <input type="checkbox" onClick={complete} />
      <p
        style={
          todo.isCompleted
            ? { textDecoration: "line-through" }
            : {  }
        }
      >
        {" "}
        {todo.text}{" "}
      </p>


        {/* <button>Edit</button> */}
        <EditModal className="todomd"  buttonLabel="Edit" todo={todo} handledit={handledit} />
        
       
        <Button
        variant="contained"
        color="secondary"
      
        startIcon={<DeleteIcon />}
        onClick={delett}>
        Delete
        
      </Button>
        
      </div>
    );
  };

export default Todo;