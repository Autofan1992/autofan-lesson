import ToDoList from "./ToDoList";
import {connect} from "react-redux";
import {
    addTodo,
    deleteAllCompleteTodo,
    deleteTodo,
    filterTodo,
    toggleAllTodo,
    updateTodoStatus
} from "../../redux/reducers/todoList-reducer";
import styles from './ToDo.module.scss';
import {getCompleteTodosCount, getActiveTodosCount, getVisibleTodos} from "../../redux/selectors/todoList-selectors";

function ToDoListContainer(props) {
    const handleFilter = e => {
        props.filterTodo(e.target.value)
    }

    return (
        <div className={styles.ToDoWrapper}>
            <ToDoList
                addTodo={props.addTodo}
                handleFilter={handleFilter}
                updateTodoStatus={props.updateTodoStatus}
                toggleAllComplete={props.toggleAllComplete}
                deleteTodo={props.deleteTodo}
                toggleAllTodo={props.toggleAllTodo}
                deleteAllCompleteTodo={props.deleteAllCompleteTodo}
                todos={props.todos}
                activeTodos={props.someActiveTodos}
                completeTodos={props.someCompleteTodos}
                todosLength={props.todosLength}
            />
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        todoList: state.todoList,
        newText: state.todoList.newText,
        todos: getVisibleTodos(state),
        filter: state.todoList.filter,
        someActiveTodos: getActiveTodosCount(state),
        someCompleteTodos: getCompleteTodosCount(state),
        toggleAllComplete: state.todoList.toggleAllComplete,
        todosLength: state.todoList.todos.length
    }
}

export default connect(
    mapStateToProps,
    {addTodo, deleteAllCompleteTodo, toggleAllTodo, deleteTodo, updateTodoStatus, filterTodo})
(ToDoListContainer)