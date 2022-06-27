
  import './App.css';

 import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
  import { Form } from 'react-bootstrap';


 function MyForm ()
 {
     return (
          <Form>

<Form.Group className="mb-3" controlId="First Name">
    <Form.Control type="text" placeholder="User" />
 
 
    <Form.Control type="email" placeholder="Email" />
   
 
  <Form.Select aria-label="Select available rooms">
  <option>Which room?</option>
  <option value="Room A1 ">Room A1</option>
  <option value="Room A2">Room A2</option>
  <option value="Room A3">Room A3</option>
</Form.Select>
 

<Form.Control type="time" name='TimeOfBookedRoom'  />
<Form.Control type="date" name='DateofBookedRoom'  />

  <Button variant="primary" type="submit" onClick = {() => alert ("All set! See you soon :) ")}>
    Submit
  </Button>
  </Form.Group>
</Form>
     );
 }
 
 export default MyForm;

