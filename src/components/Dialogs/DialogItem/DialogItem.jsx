import styles from '../Dialogs.module.scss';
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return (
        <div className={styles.dialogItem}>
            <NavLink to={`/dialogs/${props.id}`} activeClassName={styles.activeDialog}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem