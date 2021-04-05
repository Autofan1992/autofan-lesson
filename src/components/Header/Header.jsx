import styles from './Header.module.scss';
import logo from '../../images/logo.svg';
import user from '../../images/user.svg';
import {NavLink} from "react-router-dom";

function Header (props) {
    return (
        <header className={styles.header}>
            <div className={styles.logoBlock}>
                <img src={logo} alt=""/>
            </div>
            <div className={styles.loginBlock}>
                {props.isAuth
                    ? <div className={styles.userInfo}>
                        <NavLink to={`/profile/${props.userID}`}>
                            <div className={styles.avatar}>
                                <img src={props.userPhoto ? props.userPhoto : user} alt="avatar"/>
                            </div>
                        </NavLink>
                        <div className="text-center">
                            <p className="mb-0">{props.userLogin}</p>
                            <button onClick={props.handleLogout} className="btn btn-link p-0">Logout</button>
                        </div>
                    </div>
                    : <NavLink className="btn btn-link" to="/login">Login</NavLink>
                }
            </div>
        </header>
    )
}
export default Header