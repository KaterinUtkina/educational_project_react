const SET_USERS_DATA = "SET-USERS-DATA";

let initialState = {
    login: null,
    email: null,
    userId: null,
    isAuth: true,
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true,
            };
        default:
            return state;
    }
}

export const setUsersData = (login, email, userId) => ({type: SET_USERS_DATA, data: {login, email, userId}})


export default authReducer;
