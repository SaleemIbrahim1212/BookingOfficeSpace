import map from './design-composition-layout.avif'
import './App.css';
import React, {useState} from 'react';
import profilepicture from './genericprofilepciture .webp'
import logo from './logo.png'
 
function App() {

  const [isClicked, setClick] = useState(false)
  return (


  <body> 
    

    <h1> this goes across the page </h1>
 
    <div className="split left">

      <div className="centered2">

        <img src={logo} alt="Company logo"/>
        <h2>Welcome User</h2>
        <button onClick = { () => setClick(!isClicked) } type = "button"> Book a room </button>
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
        <p> No office space booked yet, click the book a room button to get started</p>

     
     
      </div> } 
         </div>
    </body>
 
  );
}

export default App;
