import React from "react";
import "./Counter.css";
import Button from "@material-ui/core/Button/Button";
import Number from "../Number/Number";
import icon from "./up-arrow-key.png";
import icon2 from "./down-arrow-key.png";

const Counter = (props) => {
  const count = props.count;
  return (
    <div className="Counter_box">
      <Button className="CaretBtn" onClick={props.onIncrement}>
        <img src={icon} alt="Increment" className="logo"></img>
      </Button>
      <br />
      <Number className="Number" count={count} />
      <br />
      <Button
        style={{ display: count ? "inline-flex" : "none" }}
        className="CaretBtn"
        onClick={props.onDecrement}
      >
        <img src={icon2} className="logo2" alt="Decrement"></img>
      </Button>
    </div>
  );
};
export default Counter;
