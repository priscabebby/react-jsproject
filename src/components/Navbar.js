
import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
} from './NavbarElements';

const Navbar = () => {
return (
<>
    <Nav>
    <Bars />

    <NavMenu>
        <h1 style={{ color: 'pink',marginRight:'300px', fontSize:'40px'}}>PRC.BY</h1>
        <NavLink to='/Home'>
        Home
        </NavLink>
        <NavLink to='/Portofolio'>
        Work/Portofolio
        </NavLink>
        <NavLink to='/Skills'>
        Skills
        </NavLink>
        <NavLink to='/Studio'>
        Studio
        </NavLink>
        <NavLink to='/Contact'>
        Contact
        </NavLink>
        
        {/* Second Nav */}
        {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
    </NavMenu>
    </Nav>
</>
);
};

export default Navbar;