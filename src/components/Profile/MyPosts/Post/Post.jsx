import styles from './Post.module.scss';
import avatar from '../../../../images/user.svg';

function Post (props) {
    return (
        <li className={`${styles.postItem} list-group-item`}>
            <div className="d-flex">
                <div className={styles.avatar}>
                    <img src={avatar} className="w-100" alt=""/>
                </div>
                <div>{props.message}</div>
            </div>
            <hr/>
            <div className="d-flex">
                {!props.likesCount ? 'Нажмите палец вверх' : <span className="me-2">Нравиться: {props.likesCount}</span>}
                <span className="ms-auto" onClick={() => props.likePost(props.id)}>👍</span>
            </div>
        </li>
    );
}

export default Post