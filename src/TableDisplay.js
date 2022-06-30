


import './App.css';

import React, {useState} from 'react';

function MyTable (props)
{

    
return ( 

<table>
    
  <tr>
      
    <td>{props.Username}</td>
    <td>{props.Email}</td>
    <td>{props.Room}</td>
    <td> {props.Time}</td>
    <td> {props.Date}</td>
  </tr> 
</table>
);


}

export default MyTable;