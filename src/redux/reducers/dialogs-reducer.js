import {reset} from "redux-form";

const ADD_MESSAGE = 'DIALOGS/addMessage'

let initialState = {
    dialogs: [
        {
            id: 1,
            name: 'Nick'
        },
        {
            id: 2,
            name: 'Dimych'
        },
    ],
    messages: [],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length, message: action.message}],
            }
        default: return state
    }
}

const setNewMessage = (message, id) => ({
    type: ADD_MESSAGE,
    message,
    id
})

export const addNewMessage = message => dispatch => {
    dispatch(setNewMessage(message))
    dispatch(reset('messageForm'))
}

export default dialogsReducer