import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = "0";
        }
        switch (userId) {
            case "0":
                return this.props.setUserProfile({
                    avatar: "https://chance2.ru/photo/img/samyi-khmuryi-kot-v-mire-foto-1.jpg"
                }, [{
                    message: "Hi, how are you? ",
                    userId,
                    likesCount: 15,
                    userAvatar: "https://chance2.ru/photo/img/samyi-khmuryi-kot-v-mire-foto-1.jpg"
                }, {
                    message: "It's my first post",
                    userId,
                    likesCount: 12,
                    userAvatar: "https://chance2.ru/photo/img/samyi-khmuryi-kot-v-mire-foto-1.jpg"
                }])
            case "1":
                return this.props.setUserProfile({
                    avatar: "https://pernatiki.com/wp-content/uploads/post_5b9f9fceac474-695x424.jpeg"
                }, [{
                    message: "Hi, how are you? ",
                    userId,
                    likesCount: 15,
                    userAvatar: "https://pernatiki.com/wp-content/uploads/post_5b9f9fceac474-695x424.jpeg"
                }, {
                    message: "It's my first post",
                    userId,
                    likesCount: 12,
                    userAvatar: "https://pernatiki.com/wp-content/uploads/post_5b9f9fceac474-695x424.jpeg"
                }])
            case "2":
                return this.props.setUserProfile({
                    avatar: "https://pernatiki.com/wp-content/uploads/post_5b9f9fcec263d-695x463.jpeg"
                }, [{
                    message: "Hi, how are you? ",
                    userId,
                    likesCount: 15,
                    userAvatar: "https://pernatiki.com/wp-content/uploads/post_5b9f9fcec263d-695x463.jpeg"
                }, {
                    message: "It's my first post",
                    userId,
                    likesCount: 12,
                    userAvatar: "https://pernatiki.com/wp-content/uploads/post_5b9f9fcec263d-695x463.jpeg"
                }])
            case "3":
                return this.props.setUserProfile({
                    avatar: "https://pernatiki.com/wp-content/uploads/post_5b9f9fce8fb68-695x556.jpeg"
                }, [{
                    message: "Hi, how are you? ",
                    userId,
                    likesCount: 15,
                    userAvatar: "https://pernatiki.com/wp-content/uploads/post_5b9f9fce8fb68-695x556.jpeg"
                }, {
                    message: "It's my first post",
                    userId,
                    likesCount: 12,
                    userAvatar: "https://pernatiki.com/wp-content/uploads/post_5b9f9fce8fb68-695x556.jpeg"
                }])
            default:
                break;
        }
        /*useAPI.getProfile(userId).then....*/

    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

export default compose(
    connect(mapStateToProps, {setUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)