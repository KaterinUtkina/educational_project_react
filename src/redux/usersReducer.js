const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_PROGRESS = "TOGGLE-FOLLOWING-PROGRESS";

let initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((user) => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: action.users,
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.numberPage
            }
        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.count,
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (numberPage) => ({type: SET_CURRENT_PAGE, numberPage});
export const setTotalUsersCount = (count) => ({type: SET_USERS_TOTAL_COUNT, count});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({type: TOGGLE_FOLLOWING_PROGRESS, isFetching, userId});

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        setTimeout(() => {
            dispatch(setUsers([
                {
                    id: 1,
                    followed: false,
                    fullName: "Ekaterina",
                    status: "I'm ok",
                    location: {city: "Ivanovo", country: "Russia"},
                    userAvatar: "https://pernatiki.com/wp-content/uploads/post_5b9f9fceac474-695x424.jpeg",
                },
                {
                    id: 2,
                    followed: true,
                    fullName: "Evgeniy",
                    status: "Let's go",
                    location: {city: "Ivanovo", country: "Russia"},
                    userAvatar: "https://pernatiki.com/wp-content/uploads/post_5b9f9fcec263d-695x463.jpeg",
                },
                {
                    id: 3,
                    followed: true,
                    fullName: "Ann",
                    status: "Hi!",
                    location: {city: "Moscow", country: "Russia"},
                    userAvatar: "https://pernatiki.com/wp-content/uploads/post_5b9f9fce8fb68-695x556.jpeg",
                },
            ]))
            dispatch(setTotalUsersCount(3))
            dispatch(toggleIsFetching(false))
        }, 2000)
        /*usersAPI.getUsers(currentPage,pageSize).then(response => this.props.setUsers(response.items))*/
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        /*usersAPI.followUser(userId).then(response => {
        * if (response.resultCode===0){
        * c(follow(userId))
        * }
        *  userId(toggleFollowingProgress(false))}*/
        dispatch(followSuccess(userId));
        setTimeout(() => {
            dispatch(toggleFollowingProgress(false, userId))
        }, 1000)
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        /*usersAPI.unfollowUser(userId).then(response => {
        * if (response.resultCode===0){
        * (follow(userId))
        * }
        *  userId(toggleFollowingProgress(false))}*/
        dispatch(unfollowSuccess(userId));
        setTimeout(() => {
            dispatch(toggleFollowingProgress(false, userId))
        }, 1000)
    }
}

export default usersReducer;
