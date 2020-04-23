//Handling calories , Dessert Table here 

import React from 'react'; 
import './table.css';
import PropTypes from 'prop-types';

const table = (props) => {
    const {name}= props;
//pass name value in table name has count and name in it
return(
<div className="Counter_box3">
<table class="table">
    <thead class="table-head">
        <tr>
                <th>Dessert(100g serving)</th>
                <th>Calories</th>
        </tr>           
    </thead>
    <tbody>
        <tr>
            <td>{name}</td>
        </tr>
    </tbody>       
</table>


</div>
//optional
)}             
table.defaultProps = {
    data: [],
  };
  
  table.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({}), // shape means object
    )
  }
  
export default table;