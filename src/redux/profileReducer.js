const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";

let initialState = {
    postsData: [],
    newPostText: "",
    profile: null,
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 12,
                userAvatar: "https://chance2.ru/photo/img/samyi-khmuryi-kot-v-mire-foto-1.jpg"
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: "",
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                postsData: action.posts,
                profile: action.userProfile,
            }
        default:
            return state;
    }
}

export const addPost = () => ({type: ADD_POST})
export const updateNewPostText = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (userProfile, posts) => (
    {type: SET_USER_PROFILE, userProfile, posts})

export default profileReducer;