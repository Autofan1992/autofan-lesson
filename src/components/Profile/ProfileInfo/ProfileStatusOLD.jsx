import React from 'react';
import s from './ProfileInfo.module.scss';
import { connect } from "react-redux";

export class ProfileStatusOLD extends React.Component {
    state = {
        editMode: false,
        currentStatus: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({ currentStatus: this.props.status })
        }
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode,
        })
    }

    handleStatusUpdate = () => {
        if (this.state.currentStatus !== this.props.status) {
            this.props.updateUserStatus(this.state.currentStatus)
        }
        this.toggleEditMode()
    }

    handleStatusChange = (e) => {
        this.setState({
            currentStatus: e.target.value
        })
    }

    render() {
        return (
            <div className={s.profileStatus}>
                {this.props.statusChangeResult !== null
                && <div>
                    {!this.props.statusChangeResult
                        ? <div className="alert alert-danger" role="alert">
                            Что-то пошло не так!
                        </div>
                        : <div className="alert alert-success" role="alert">
                            Статус успешно изменён!
                        </div>
                    }
                </div>}

                <div className="d-flex"><p className="fw-bold">Статус:&nbsp;</p>
                    <div className={s.statusBlock}>
                        <div>
                            <span>{this.props.status}&nbsp;</span>
                            <button className="btn btn-secondary d-inline-flex align-items-center"
                                    onClick={this.toggleEditMode}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-pencil-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                                </svg>
                            </button>
                        </div>
                        {this.state.editMode
                        && <div className={s.forInput}>
                            <input type="text" value={this.state.currentStatus} onBlur={this.handleStatusUpdate}
                                   onChange={this.handleStatusChange} autoFocus={true}/>
                        </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps)(ProfileStatusOLD);