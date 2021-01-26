import React from "react";
import stl from "./../Dialogs.module.css"
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div  className={stl.dialog_item}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={stl.active} >
                <img src={props.avatar} alt="user avatar"/>
                <div className={stl.dialog_name_user}>{props.name}</div>
            </NavLink>
        </div>
    );
}


export default DialogItem;


