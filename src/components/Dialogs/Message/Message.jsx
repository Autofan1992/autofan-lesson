import styles from '../Dialogs.module.scss';

function Message (props) {
    return (
        <li className={`${styles.messageBlock} list-group-item`}>
            {props.message}
        </li>
    );
}

export default Message