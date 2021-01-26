import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUsersData} from "../../redux/authReducer";


class HeaderContainer extends React.Component {
    componentDidMount() {
        /*axios.get("", {withCredentials: true}).then()*/
        /*Отправляем хуку*/
    }

    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
})

export default connect(mapStateToProps, {setUsersData})(HeaderContainer);