import React, { useState } from "react";
import CounterBox from "../Counter/Counter";
import AddData from "../AddData/AddData";
import Table from "../Table/table";

function Container() {
  const [tableData, setTableData] = useState([]);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count > 1 ? setCount(count - 1) : setCount(0);
  };

  const updateTableData = (name) => {
    setTableData(tableData.concat({ name, value: count }));
    setCount(0);
  };

  return (
    <table>
      <tbody>
        <tr>
          <td>
            <CounterBox
              count={count}
              onIncrement={increment}
              onDecrement={decrement}
            />
          </td>
          <td>
            <Table data={tableData} />
          </td>
        </tr>
        <tr>
          <td>
            <AddData title="Add Dessert Value" onChange={updateTableData} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

export default Container;
