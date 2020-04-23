import React,{useState} from 'react'; 
import './Adddata.css';
import table from './table';
const Adddata = (props) => {

    //states and props
    const[name,setName] = useState('');
    const[nameError,setNameError] = useState(null);


    //function to handle submit button
    const handleSubmit =()=> {
        alert("dessert is " +name);
        //handle validation for empty name field
        if(name===''){
            // Create an error set method to in
            setNameError('Invaild input');
        }
        else{
            setNameError(null);

        }
    }

    
return(
       //set value on change of input button by calling setName
       //call handle submit function when click on primary button to pass name value

    <div className="Counter_box2">
    <div className="ContactForm">
         <h3>Add Data</h3>
            <table>
                <tbody>
                <tr>
                    <td>
                        
                        <input 
                            type="text"
                            id="name" 
                            placeholder="Dessert Name"
                            className="form-control"
                            value={name}
                            onChange={(event) => {
                            setName(event.target.value);
                            }}/>
                             <div className="ErrorMessage">{nameError}</div> 
                    </td>
                    <td>
                        <button 
                            type="button" 
                            className="btn btn-primary"
                            onClick={handleSubmit}>
                        PRIMARY
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        </div>
    </div>
          
 )
}
export default Adddata;
