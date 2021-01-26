import React from "react";
import stl from "./Users.module.css";
import {Link} from "react-router-dom";


const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (
        <div className={stl.users_wrapper}>
            <div className={stl.users}>
                {props.users.map((user) => {
                    return (
                        <div className={stl.user_item} key={user.id}>
                            <div>
                                <Link to={"/profile/" + user.id}>
                                    <div className={stl.user_avatar}><img
                                        src={user.userAvatar !== null ? user.userAvatar : ""}
                                        alt="user avatar"/></div>
                                </Link>
                            </div>
                            <div className={stl.user_description}>
                                <div className={stl.fullName}>{user.fullName}</div>
                                <div className={stl.location}>{user.location.city}, </div>
                                <div className={stl.location}> {user.location.country}</div>
                                <div className={stl.status}>{user.status}</div>
                                {user.followed ?
                                    <button disabled={props.followingInProgress.some(id => id === user.id)}
                                            onClick={() => props.unfollow(user.id)}>Unfollow</button> :
                                    <button disabled={props.followingInProgress.some(id => id === user.id)}
                                            onClick={() => props.follow(user.id)}>Follow</button>}
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className={stl.users_pagination}>
                {pages.map((page) => {
                    return <span className={props.currentPage === page && stl.selectedPage}
                                 onClick={() => props.onPageChanged(page)} key={page}>{page}</span>
                })}
            </div>
        </div>
    )
}

export default Users;