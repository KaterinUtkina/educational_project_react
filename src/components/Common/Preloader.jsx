import React from "react";
import preloader from "../Users/preloader.gif";
import stl from "../Users/Users.module.css";

const Preloader = (props) => {
    return (
        <img src={preloader} alt="" className={stl.preloader}/>
    )
}

export default Preloader;