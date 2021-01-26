import React from "react";
import stl from "./../Dialogs.module.css"

const MessageItem = (props) => {
    return (
        <div className={stl.message_item}>
            {props.message}
        </div>
    );
}


export default MessageItem;
