import {useState, useEffect} from 'react'
import styles from './ProfileInfo.module.scss'
import {connect} from "react-redux"
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {getAuthUserID, getIsAuth} from "../../../redux/selectors/auth-selectors";

function ProfileStatusWithHooks(props) {

    const [editMode, setEditMode] = useState(false)
    const [currentStatus, setStatus] = useState('')

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    const toggleEditMode = () => {
        setEditMode(!editMode)
    }

    const handleStatusUpdate = () => {
        if (currentStatus !== props.status) {
            props.updateUserStatus(currentStatus)
        }
        toggleEditMode()
    }

    const handleStatusChange = (e) => {
        setStatus(e.target.value)
    }

    return (
        <div className={styles.profileStatus}>
            {props.statusChangeResult !== null
            && <div>
                {!props.statusChangeResult
                    ? <div className="alert alert-danger" role="alert">
                        Что-то пошло не так!
                    </div>
                    : <div className="alert alert-success" role="alert">
                        Статус успешно изменён!
                    </div>
                }
            </div>}

            <div className="d-flex"><p className="fw-bold">Статус:&nbsp;</p>
                <div className={styles.statusBlock}>
                    <div>
                        <span>{props.status}&nbsp;</span>
                        {((props.isAuth && (Number(props.match.params.userId) === props.authorisedUserID)) || (props.match.params.userId === undefined)) &&
                        <button
                            className="btn btn-secondary d-inline-flex align-items-center ms-2"
                            onClick={toggleEditMode}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                <path
                                    d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                            </svg>
                        </button>
                        }
                    </div>
                    {editMode
                    && <div className={styles.forInput}>
                        <input type="text" value={currentStatus} onBlur={handleStatusUpdate}
                               onChange={handleStatusChange} autoFocus={true}/>
                    </div>
                    }
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: getIsAuth(state),
    authorisedUserID: getAuthUserID(state),
})
export default compose(
    connect(mapStateToProps),
    withRouter
)(ProfileStatusWithHooks)