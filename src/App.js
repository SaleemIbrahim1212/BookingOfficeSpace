import map from './design-composition-layout.avif'
import './App.css';
import React, {useState} from 'react';
import profilepicture from './genericprofilepciture .webp'
import logo from './logo.png'

import HomePagePanel from './HomePagePanel.js';
import MyForm from './MyForm.js';
import MyTable from './TableDisplay.js';
function App() {

  const [isClicked, setClick] = useState(false)
  const [officeSpace, setSpace] = useState( [ {} ] )


  return (


  <body> 


 
    <div className="split left">

      <div className="centered2">
    
      { !isClicked ? <HomePagePanel /> :  <MyForm currdata = {officeSpace} changedata = {setSpace} />  }

<button onClick = { () => setClick(!isClicked) } type = "button"> {!isClicked ? "Book a room " : "Back to profile"}</button> 
      </div>
    </div>
    


    <div className="split right">
    {  isClicked === true ? 
      <div className="centered">
        <img src= {map}  alt="Map Layout"/>
        <h2>Please select a room based on the layout</h2>
         
      </div>
     : <div className='centered2'> 
        <img src = {profilepicture}/>
        <h2>Rooms booked by user</h2>
       { console.log(officeSpace.length)}
        {officeSpace.length === 1 ? 
      
        <p> No office space booked yet, click the book a room button to get started</p>: <div> <p color='green'> You have {officeSpace.length-1} rooms booked details below</p>

       {officeSpace.map( (office) =>  !(Object.keys(office).length === 0)?  <MyTable Username = {office.Username} Email = {office.Email} Room = {office.Room} Time = {office.Time} Date = {office.Date} /> : <></>)}
       
        </div>
      
        }
     
      </div> } 
         </div>
    </body>
 
  );
}

export default App;
 