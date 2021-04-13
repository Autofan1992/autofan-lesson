import {reset} from "redux-form";

const ADD_TODO = 'TODOS/ADD_TODO'
const DELETE_TODO = 'TODOS/DELETE_TODO'
const DELETE_ALL_COMPLETE_TODO = 'TODOS/DELETE_ALL_COMPLETE_TODO'
const TOGGLE_ALL_TODO = 'TODOS/TOGGLE_ALL_TODO'
const UPDATE_TODO_STATUS = 'TODOS/UPDATE_TODO_STATUS'
const FILTER_TODO = 'TODOS/FILTER_TODO'

let initialState = {
    todos: [],
    filter: 'all',
    toggleAllComplete: true
}

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                newText: '',
                todos: [{id: state.todos.length, text: action.text, complete: false}, ...state.todos],
            }

        case UPDATE_TODO_STATUS:
            return {
                ...state,
                todos: state.todos.map(todo => todo.id === action.id
                    ? {...todo, complete: !todo.complete} : todo)
            }

        case FILTER_TODO:
            return {
                ...state,
                filter: action.status
            }

        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.id),
            }

        case DELETE_ALL_COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.complete),
            }

        case TOGGLE_ALL_TODO:
            return {
                ...state,
                toggleAllComplete: !state.toggleAllComplete,
                todos: state.todos.map((todo) => {
                    return {
                        ...todo,
                        complete: state.toggleAllComplete
                    }
                })
            }

        default:
            return state
    }
}

const setNewTodo = text => ({
    type: ADD_TODO,
    text
})

export const addTodo = (text) => dispatch => {
    dispatch(setNewTodo(text))
    dispatch(reset('todoForm'))
}

export const deleteAllCompleteTodo = () => ({
    type: DELETE_ALL_COMPLETE_TODO
})

export const toggleAllTodo = () => ({
    type: TOGGLE_ALL_TODO
})

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
})

export const updateTodoStatus = (id) => ({
    type: UPDATE_TODO_STATUS,
    id
})

export const filterTodo = (filterText) => ({
    type: FILTER_TODO,
    status: filterText
})

export default todoListReducer