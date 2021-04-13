import { useEffect } from 'react';
import Profile from "./Profile";
import { connect } from "react-redux";
import {
    getUserProfile,
    getUserStatus,
    updateUserAvatar,
    updateUserStatus
} from "../../redux/reducers/profile-reducer";
import { withRouter } from "react-router";
import { compose } from "redux";
import { getAuthUserID, getIsAuth } from "../../redux/selectors/auth-selectors";

function ProfileContainer({ getUserProfile, getUserStatus, authorisedUserID, ...props }) {

    useEffect(() => {
        let userID = props.match.params.userId ?? authorisedUserID
        if (userID) {
            getUserProfile(userID)
            getUserStatus(userID)
        }
    }, [getUserProfile, getUserStatus, props.match.params, authorisedUserID])

    return (
        <div className="profileBlock">
            <Profile {...props} userID={props.match.params.userId} isOwner={!props.match.params.userId}/>
        </div>
    )
}

let mapStateToProps = state => ({
    authorisedUserID: getAuthUserID(state),
    isAuth: getIsAuth(state),
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    avatarChangeResult: state.profilePage.avatarChangeResult,
    statusChangeResult: state.profilePage.statusChangeResult
})

export default compose(
    connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus, updateUserAvatar}),
    withRouter)(ProfileContainer)