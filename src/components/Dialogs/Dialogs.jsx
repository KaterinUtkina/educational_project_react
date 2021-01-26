import React from "react";
import stl from "./Dialogs.module.css"
import DialogItem from "./Dialog/DialogItem";
import MessageItem from "./Message/MessageItem";

const Dialogs = (props) => {

    let dialogItemElement = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id}
                                                                                    id={dialog.id}
                                                                                    avatar={dialog.userAvatar}/>);
    let usersMessageItemElement = props.dialogsPage.messagesData.usersMessages.map(message => <MessageItem
        message={message.message} key={message.id}/>)
    let myMessageItemElement = props.dialogsPage.messagesData.myMessages.map(message => <MessageItem
        message={message.message} key={message.id}/>)

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.updateNewMessageText(text);
    }


    return (
        <div className={stl.dialogs}>
            <div className={stl.dialogs_items}>
                {dialogItemElement}
            </div>
            <div className={stl.messages}>
                <div className={stl.messages_block}>
                    <div className={stl.users_messages}>
                        {usersMessageItemElement}
                    </div>
                    <div className={stl.my_messages}>
                        {myMessageItemElement}
                    </div>
                </div>
                <div className={stl.block_add_new_message}>
                    <textarea onChange={onMessageChange} value={props.dialogsPage.messagesData.newMessage}/>
                    <button onClick={onAddMessage}>Add Message</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;
