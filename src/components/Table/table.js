import React,{useState} from 'react'; 
import './table.css';
const table = (props) => {
    const { name } = props;

console.log(name);
return(
<div className="Counter_box3">

<table className="table">
          <thead className="table-head">
              <tr>
                <th>Dessert(100g serving)</th>
                <th>Calories</th>
              </tr>           
             
              </thead>
              <tbody>
              
            </tbody>
             
        </table>


</div>

)}             

export default table;