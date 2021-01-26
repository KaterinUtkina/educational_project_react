import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    unFollowUser(userId) {
        return instance.delete(`https://unfollow.blalablablba/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    followUser(userId) {
        return instance.post(`https://follow.blalablablba/${userId}`)
            .then(response => {
                return response.data;
            })
    },
    getProfile(userId) {
        return profileAPI.getProfile(userId)
    }
}

export const profileAPI = {
    getProfile(userId) {
    return instance.get('');
    },
    getStatus(userId) {
        return instance.get('');
    },
    updateStatus(userId) {
        return instance.get('');
    }
}

