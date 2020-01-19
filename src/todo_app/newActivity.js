import React from 'react';
import {useState} from 'react';
import {Button, Confirm,Form} from 'semantic-ui-react'
const ModalControlled = props => {
  const [title, setTitle] = useState('')
  const [show, setShow] = useState(false)
  const [completed, setCompleted] = useState(false)

  function handleConfirm(){
     props.OnFormSubmit({title: title, completed: completed})
    setShow(false)
  }
    return (<div>
      <Button className="green button" onClick={() => setShow(true)}>Add Activity</Button>
      <Confirm
      open={show}
      content={      
        <Form >
          <Form.Field>
      <label>Title:</label>
      <input placeholder='Insert title of activity...' value={title}
      onChange={e => setTitle(e.target.value)}/>
    </Form.Field>
    <Form.Field>
    <label>Completed</label>
    <input className="checkbox" type="checkbox" checked={completed}
    onChange={e => setCompleted(e.target.checked)} /></Form.Field>
        </Form >}
      onCancel={() => setShow(false)}
      onConfirm={() => handleConfirm()}
    />
  </div>)
}
export default ModalControlled;