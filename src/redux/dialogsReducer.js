const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    dialogsData: [
        {
            name: "Kate",
            id: "1",
            userAvatar: "https://pernatiki.com/wp-content/uploads/post_5b9f9fceac474-695x424.jpeg"
        },
        {
            name: "Evgeniy",
            id: "2",
            userAvatar: "https://pernatiki.com/wp-content/uploads/post_5b9f9fcec263d-695x463.jpeg"
        },
        {
            name: "Ann",
            id: "3",
            userAvatar: "https://pernatiki.com/wp-content/uploads/post_5b9f9fce8fb68-695x556.jpeg"
        }
    ],
    messagesData: {
        myMessages: [
            {message: "Hi", id: "1"},
            {message: "how are you?", id: "2"},
            {message: "By", id: "3"}
        ],
        usersMessages: [
            {message: "fine", id: "1"},
            {message: "no", id: "2"},
            {message: "By", id: "3"},
        ],
        newMessage: "",
    }
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 5,
                message: state.messagesData.newMessage,
            };
            return {
                ...state,
                messagesData: {
                    ...state.messagesData,
                    myMessages: [...state.messagesData.myMessages, newMessage],
                    newMessage: "",
                }
            };
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                messagesData: {
                    ...state.messagesData,
                    newMessage: action.newText,
                }
            };
        default:
            return state;
    }
}

export const addMessage = () => ({type: ADD_MESSAGE})
export const updateNewMessageText = (text) => (
    {type: UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogsReducer;
