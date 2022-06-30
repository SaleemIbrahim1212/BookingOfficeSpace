
  import './App.css';

 import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
  import { Form } from 'react-bootstrap';


 function MyForm (props)
 {

  const [Room, changeroom] = useState("Select a room")
  const [Time, changeTime]= useState()
  const [Date, changeDate] = useState()



     return (
          <Form>

<Form.Group className="mb-3" controlId="First Name">
    <Form.Control type="text" placeholder="Username" disabled/>
 
 
    <Form.Control type="email" placeholder="exampleemail@company.com" disabled />
   
 
    <Form.Group controlid = "Arooms">
  <Form.Control
          as="select"
          value={Room}
          onChange={e => {

            changeroom(e.target.value);
          }}
        >
  
  <option value="Room A1 ">Room A1</option>
  <option value="Room A2">Room A2</option>
  <option value="Room A3">Room A3</option>
  </Form.Control>
</Form.Group>
 

<Form.Control type="time" name='TimeOfBookedRoom' onChange = {e => {
    changeTime(e.target.value)
  }} />
<Form.Control type="date" name='DateofBookedRoom' onChange = {e => 
{
  changeDate(e.target.value)
}}  />

  <Button variant="primary" type="button" onClick = {() => props.changedata([
    
   
    
    ...props.currdata, {Username: "saleem", Email: 'saleemibramza@gmail.com', Room: Room , Time: Time, Date: Date 




}  ]  ) }>
    Submit
  </Button>


  </Form.Group>
</Form>

     );
 }
 
 export default MyForm;

