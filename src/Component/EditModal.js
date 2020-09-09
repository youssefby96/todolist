import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const EditModal = (props) => {
  const {
    buttonLabel,
    className,todo,handledit
  } = props;

  const [modal, setModal] = useState(false);
  const [editText,setEditText]=useState(todo.text)
  const toggle = () => setModal(!modal);
  const editt=()=>{
    handledit (todo.id,editText)
      toggle()
  }
  return (
    <div>
      <Button className="cls" color="warning" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>EDIT PANNEL</ModalHeader>
        <ModalBody>
            <input className="inpt" type="text" value={editText} onChange={(e)=>setEditText(e.target.value)} />
        </ModalBody>
        <ModalFooter>
          <Button className="btnmdl" onClick={editt} color="success" size="lg" active>save</Button>{' '}
          <Button className="btnmdls" color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default EditModal;