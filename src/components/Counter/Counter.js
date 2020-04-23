import React,{useState} from 'react';
import './Counter.css';
import Button from '@material-ui/core/Button/Button'
import Number from '../Number/Number';
import icon from './up-arrow-key.png';
import icon2 from './down-arrow-key.png';


const Counter =()=>{

        //initially count value is 0
        const [count, setCount] = useState(0);
        const Increment =() =>{setCount(count + 1)}
        const Decrement =()=>{
        console.log(count);

        //if count value is 0 or less than 0 then reset count
        if(count <= 0){
                setCount(0);
        }
        else{
                setCount(count - 1)}
        }

        //set Increment , Decrement caret Button 
        //If button value reached to 0 hide decrement button 
        return(
                <div className="Counter_box">
                        <Button className="CaretBtn"  onClick={Increment}>
                                <img src={icon} alt="Increment" className="logo"></img>
                        </Button>
                        <br/>
                        <Number className="Number" count={count}/>
                        <br/>
                        <Button style={{ display: (count ? 'inline-flex' : 'none') }}
                        className="CaretBtn" onClick={Decrement}>
                                <img src={icon2} className="logo2" alt="Decrement"></img>
                        </Button>
                </div> 
                );
        }
export default Counter;