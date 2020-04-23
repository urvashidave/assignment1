import React, {Component} from 'react';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import CounterBox from './components/Counter/Counter';
import Adddata from './components/Adddata/Adddata';
import Table from './components/Table/table';

class App extends Component {

  name={
    name:'title'
  }

  changethwworld =(namev) =>{
    this.setName({name:namev});
  }

  render(){
  return (
    <div className="App">
      <div className="App-header">
        <NavBar/>
          <table>
            <tbody>
              <tr>
                <td>
                  <CounterBox/>
                </td>
                <td>
                  <Table dowhatever={this.changethwworld.bind(this,'urvashi')} title={this.name.title}/>
                  
                </td>
              </tr>
              <tr>
                <td>
                  <Adddata/>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
</div>
);
}
}
export default App;
