function ToDo(props) {
    return (
        <ul className="list-group mb-3">
            <li className="list-group-item d-flex align-items-center justify-content-between">
                <div className="toDoItem flex-grow-1 d-flex align-items-center">
                    <input className="form-check-input" type="checkbox"
                           name="toDo" id={props.id}
                           onChange={props.handleComplete}
                           checked={props.completeToggle}
                    />
                    <label htmlFor={props.id}
                           className={`${props.completeToggle} mx-3 form-check-label flex-grow-1`}>{props.text}</label>
                </div>
                <button className="btn btn-danger btn-sm" onClick={props.handleDelete} id={props.id}>&times;</button>
            </li>
        </ul>
    )
}

export default ToDo