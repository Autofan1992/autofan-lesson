import Header from "./Header";
import {logout} from "../../redux/reducers/auth-reducer";
import {connect} from "react-redux";
import {getAuthUserID, getAuthUserLogin, getAuthUserPhoto, getIsAuth} from "../../redux/selectors/auth-selectors";

function HeaderContainer(props) {
    const handleLogout = () => {
        props.logout()
    }

    return (
        <Header {...props} handleLogout={handleLogout}/>
    )
}

const mapStateToProps = state => ({
    userLogin: getAuthUserLogin(state),
    userID: getAuthUserID(state),
    userPhoto: getAuthUserPhoto(state),
    isAuth: getIsAuth(state)
})

export default connect(mapStateToProps, {logout})(HeaderContainer)