import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {
                    message: "Hi, how are you? ",
                    id: "1",
                    likesCount: 15,
                    userAvatar: "https://www.interfax.ru/ftproot/textphotos/2019/05/17/700gc.jpg"
                },
                {
                    message: "It's my first post",
                    id: "2",
                    likesCount: 12,
                    userAvatar: "https://www.interfax.ru/ftproot/textphotos/2019/05/17/700gc.jpg"
                }
            ],
            newPostText: "hello",
        },
        dialogsPage: {
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
    },
    getState() {
        return this._state
    },
    _callSubscribe() {
        console.log('State changed')
    },
    subscribe(observer) {
        this._callSubscribe = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscribe(this.state);
    }
}

export default store;
window.store = store;