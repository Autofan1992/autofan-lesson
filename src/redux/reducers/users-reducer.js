import { userAPI } from "../../api/api";

const TOGGLE_FOLLOW_USER = 'USERS/TOGGLE_FOLLOW_USER'
const SET_USERS = 'USERS/SET_USERS'
const SET_CURRENT_PAGE = 'USERS/SET_CURRENT_PAGE'
const SET_USERS_TOTAL_COUNT = 'USERS/SET_USERS_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'USERS/TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_PROGRESS = 'USERS/TOGGLE_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW_USER:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userID
                    ? { ...u, followed: !u.followed } : u)
            }

        case SET_USERS:
            return {
                ...state,
                users: action.users
            }

        case SET_USERS_TOTAL_COUNT:
            return {
                ...state, totalUsersCount: action.totalCount
            }

        case SET_CURRENT_PAGE:
            return {
                ...state, currentPage: action.currentPage
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state, isFetching: action.isFetching
            }

        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFollowing
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(id => id !== action.userID)
            }

        default:
            return state
    }
}

const setToggleFollow = (userID) => ({ type: TOGGLE_FOLLOW_USER, userID })
const setUsers = (users) => ({ type: SET_USERS, users })
const setTotalUsersCount = (totalCount) => ({ type: SET_USERS_TOTAL_COUNT, totalCount })
const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
const toggleFollowingProgress = (isFollowing, userID) => ({
    type: TOGGLE_FOLLOWING_PROGRESS,
    isFollowing,
    userID
})

export const requestUsers = (pageNumber, pageSize) => {
    return async dispatch => {
        dispatch(toggleIsFetching(true))

        let response = await userAPI.getUsers(pageNumber, pageSize)
        dispatch(setUsers(response.data.items))
        dispatch(setTotalUsersCount(response.data.totalCount))
        dispatch(setCurrentPage(pageNumber))
        dispatch(toggleIsFetching(false))
    }
}

export const followUserToggle = (userID, followed) => async dispatch => {
    let followFunc = !followed ? userAPI.followUserRequest : userAPI.unfollowUserRequest
    dispatch(toggleFollowingProgress(true, userID))

    let response = await followFunc(userID)
    if (response.data.resultCode === 0) {
        dispatch(setToggleFollow(userID))
        dispatch(toggleFollowingProgress(false, userID))
    }
}

export default usersReducer