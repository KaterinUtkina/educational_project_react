import React from "react";
import {
    follow, getUsers,
    setCurrentPage, toggleFollowingProgress, unfollow
} from "../../redux/usersReducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../Common/Preloader";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.getUsers(page, this.props.pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> :
                    <Users totalUsersCount={this.props.totalUsersCount} pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage} onPageChanged={this.onPageChanged}
                           unfollow={this.props.unfollow} follow={this.props.follow}
                           users={this.props.users} followingInProgress={this.props.followingInProgress}
                    />}

            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
}


export default compose(
    connect(mapStateToProps, {
        follow, unfollow, setCurrentPage, toggleFollowingProgress,
        getUsers,
    }),
    withAuthRedirect
)(UsersContainer);
