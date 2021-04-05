import { connect } from "react-redux";
import {
    followUserToggle, requestUsers,
} from "../../redux/reducers/users-reducer";
import Users from "./Users";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching, getPageSize, getTotalUsersCount, getUsers
} from "../../redux/selectors/users-selectors";
import { useEffect } from "react";

function UsersContainer({ users, requestUsers, followUserToggle, isFetching, followingInProgress, currentPage, pageSize, totalUsersCount }) {

    useEffect(() => {
        if (!users.length) {
            requestUsers(currentPage, pageSize)
        }
    }, [users.length, requestUsers, currentPage, pageSize])

    const handleFollowingUser = (userId, followed) => {
        followUserToggle(userId, followed)
    }

    const onPageChanged = (pageNumber, pageSize) => {
        requestUsers(pageNumber, pageSize)
    }

    return (
        <Users
            isFetching={isFetching}
            toggleFollowing={handleFollowingUser}
            users={users}
            followingInProgress={followingInProgress}
            currentPage={currentPage}
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
            onPageChanged={onPageChanged}
        />
    )
}

/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        followingInProgress: state.usersPage.followingInProgress,
        isFetching: state.usersPage.isFetching
    }
}*/

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        followingInProgress: getFollowingInProgress(state),
        isFetching: getIsFetching(state)
    }
}

export default connect(mapStateToProps,{followUserToggle, requestUsers})(UsersContainer)