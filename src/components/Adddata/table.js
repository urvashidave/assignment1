import React,{useState} from 'react'; 
import './table.css';
import PropTypes from 'prop-types';

const table = (props) => {
    const { data } = props;
    console.log(props.name);
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
              {data.map((tabledata) => {
            return (
                <tr>
                    <td>{tabledata}</td>
                </tr>
                 );
                })}
            </tbody>
             
        </table>


</div>

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