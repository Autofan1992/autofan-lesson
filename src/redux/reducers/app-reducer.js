import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = 'APP/SET_INITIALIZED'

let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default: return state
    }
}

const setInitializingSuccess = () => ({type: SET_INITIALIZED})

export const initializeApp = () => dispatch => {
    dispatch(getAuthUserData()).then(() => {
            dispatch(setInitializingSuccess())
        }
    )
}


export default appReducer