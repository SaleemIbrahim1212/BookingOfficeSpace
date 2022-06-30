
  import './App.css';

 import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
  import { Form } from 'react-bootstrap';


 function MyForm (props)
 {



     return (
          <Form>

<Form.Group className="mb-3" controlId="First Name">
    <Form.Control type="text" placeholder="Username" disabled/>
 
 
    <Form.Control type="email" placeholder="exampleemail@company.com" disabled />
   
 
  <Form.Select aria-label="Arooms">
  <option>Which room?</option>
  <option value="Room A1 ">Room A1</option>
  <option value="Room A2">Room A2</option>
  <option value="Room A3">Room A3</option>
</Form.Select>
 

<Form.Control type="time" name='TimeOfBookedRoom'  />
<Form.Control type="date" name='DateofBookedRoom'  />

  <Button variant="primary" type="button" onClick = {() => props.changedata([...props.currdata, {Username: "saleem", Email: 'saleemibramza@gmail.com', Room: 'A1', Time: '2:00pm', Date: "2/2/20222" }]) }>
    Submit
  </Button>


  </Form.Group>
</Form>

     );
 }
 
 export default MyForm;

