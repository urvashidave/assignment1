//Handling Dessert value in this file


import React, { useState } from "react";
import "./Adddata.css";


//set props
  const AddData = (props) => {
  const [name, setName] = useState("");
  const [showError, setShowError] = useState(false);
  const title = props.value ? props.value : "Add New Data";


  //Handle submit button
  const handleSubmit = () => {
    if (!name) {
      setShowError(true);
    } else {
      props.onChange(name);
      setShowError(false);
    }
    setName("");
  };
  //Do validation
  const getError = () => {
    if (!name && showError) {
      return <div className="ErrorMessage">Please enter name</div>;
    }
  };

  return (
    //set value on change of input button by calling setName
    //call handle submit function when click on primary button to pass name value

    <div className="Counter_box2">
      <div className="ContactForm">
        <h3>{title}</h3>
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
                  onChange={(event) => setName(event.target.value)}
                />
                {getError()}
              </td>
              <td>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  PRIMARY
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AddData;
