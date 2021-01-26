import React from "react";
import stl from "./Navbar.module.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={stl.nav}>
            <div className={stl.overlay}>
                <div className={stl.item}>
                    <NavLink to="/profile" activeClassName={stl.active}>
                        <span className={`${stl.icon} ${stl.profile}`}>Profile</span>
                    </NavLink>
                </div>
                <div className={stl.item}>
                    <NavLink to="/dialogs" activeClassName={stl.active}>
                        <span className={`${stl.icon} ${stl.message}`}>Message</span>
                    </NavLink>
                </div>
                <div className={stl.item}>
                    <NavLink to="/news" activeClassName={stl.active}>
                        <span className={`${stl.icon} ${stl.news}`}>News</span>
                    </NavLink>
                </div>
                <div className={stl.item}>
                    <NavLink to="/music" activeClassName={stl.active}>
                        <span className={`${stl.icon} ${stl.music}`}>Music</span>
                    </NavLink>
                </div>
                <div className={stl.item}>
                    <NavLink to="/users" activeClassName={stl.active}>
                        <span className={`${stl.icon} ${stl.users}`}>Users</span>
                    </NavLink>
                </div>
                <div className={`${stl.item} ${stl.sett}`}>
                    <NavLink to="/settings" activeClassName={stl.active}>
                        <span className={`${stl.icon} ${stl.settings}`}>Settings</span>
                    </NavLink>
                </div>
            </div>

        </nav>
    );
}

export default Navbar;