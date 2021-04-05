import ToDo from "./ToDo";
import {Field, reduxForm} from "redux-form";
import {minLength, requiredField} from "../../redux/utilities/validators/validators";
import {Input} from "../common/FormControls/FormControls";

const minLength2 = minLength(2)

function ToDoList(props) {

    const addNewTodo = values => {
        props.addTodo(values.text)
    }

    return (
        <>
            <TodoReduxForm onSubmit={addNewTodo}/>
            <hr/>
            {
                props.todos.map(t => <ToDo
                    key={t.id} id={t.id} text={t.text}
                    completeToggle={t.complete}
                    handleComplete={() => props.updateTodoStatus(t.id)}
                    handleDelete={() => props.deleteTodo(t.id)}
                />)
            }
            <p className="todosLeft">Активных заметок{props.activeTodos > 0 ? (': ' + props.activeTodos) : ' нет'}</p>
            <div className="filterButtons">
                <div className="row">
                    <div className="col-auto">
                        <button className="btn btn-secondary" onClick={props.handleFilter} value="ALL_TODOS">Показать
                            все
                        </button>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-secondary" onClick={props.handleFilter} value="ACTIVE_TODOS"
                                disabled={!props.activeTodos}>Показать
                            активные
                        </button>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-secondary" onClick={props.handleFilter}
                                value="COMPLETE_TODOS" disabled={!props.completeTodos}>Показать выполненные
                        </button>
                    </div>
                </div>
            </div>
            <div>
                {props.todosLength
                    ? <button className="btn btn-secondary my-3" onClick={() => props.toggleAllTodo()}>Отметить
                        все {`${props.toggleAllComplete}`}</button>
                    : ''}
            </div>
            <div>
                {props.completeTodos
                    ? <button className="btn btn-secondary" onClick={() => props.deleteAllCompleteTodo()}>Удалить все
                        выполненные</button>
                    : ''}
            </div>
        </>
    )
}

function TodoForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="row">
                <div className="col">
                        <Field
                            name={'text'}
                            component={Input}
                            placeholder="Введите заметку"
                            validate={[requiredField, minLength2]}
                        />
                </div>
                <div className="col-auto">
                    <button className="btn btn-primary px-5">Добавить заметку</button>
                </div>
            </div>
        </form>
    )
}

const TodoReduxForm = reduxForm({form: 'todoForm'})(TodoForm)

export default ToDoList