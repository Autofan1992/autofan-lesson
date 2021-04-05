import styles from './Dialogs.module.scss';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormControls/FormControls";
import {maxLength, minLength, requiredField} from "../../redux/utilities/validators/validators";

let maxLength500 = maxLength(500)
let minLength2 = minLength(2)

function Dialogs(props) {

    const addMessage = values => {
        props.addNewMessage(values.message)
    }

    return (
        <div className={styles.dsRow}>
            <div className={styles.sidebar}>
                <h2>DIALOGS</h2>
                <div className={styles.dialogs}>
                    {props.dialogs
                        .map((d) =>
                            <DialogItem key={d.id} name={d.name} id={d.id}/>)
                    }
                </div>
            </div>
            <div className={`${styles.content} p-3`}>
                <ul className="list-group mb-3">
                    {props.messages
                        .map((m) => <Message key={m.id} message={m.message} id={m.id}/>)
                    }
                </ul>
                <MessageReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    )
}

function AddMessageForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="input-block">
                <Field
                    placeholder="Введите ваше сообщение"
                    name={'message'}
                    component={Textarea}
                    validate={[requiredField, minLength2, maxLength500]}
                />
            </div>
            <button className="btn btn-primary mt-2">Отправить сообщение</button>
        </form>
    )
}

const MessageReduxForm = reduxForm({form: 'messageForm'})(AddMessageForm)

export default Dialogs