import React from "react";
import "./table.css";

const table = (props) => {
  const { data } = props;
  return (
    <div className="Counter_box3">
      <table className="table">
        <thead className="table-head">
          <tr>
            <th>Dessert(100g serving)</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr>
                <th>{item.name}</th>
                <th>{item.value}</th>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default table;
