import React from 'react';
import stl from './Header.module.css';
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={stl.header}>
            <div className={stl.header_logo}/>
            <div className={stl.login_block}>
                {props.isAuth ? props.login : <Link to="/login">Log in</Link>}
            </div>
        </header>
    );
}

export default Header;