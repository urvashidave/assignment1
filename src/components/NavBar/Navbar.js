import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import Button  from '@material-ui/core/Button';
import './Navbar.css';

const NavBar =()=>{

    return (
        <nav className="TopNav navbar navbar-expand-lg">
        <div>
        <MenuIcon/> <Button >COUNTERAPP</Button>
        </div>
       
      </nav>
    )
}
export default NavBar;