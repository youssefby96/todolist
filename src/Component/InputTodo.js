import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const InputTodo = ({ handleAdd }) => {
  const [inputText, setInputText] = useState("");
  //   33333
  const add = () => {
    handleAdd(inputText);
    setInputText("");
  };
  return (
    <div>
      <input className="inputdsg"
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
      
        endIcon={<Icon></Icon>}
        onClick={add}>
        Add
      </Button>
      
    </div>
  );
};
export default InputTodo;