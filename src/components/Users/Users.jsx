import styles from './Users.module.scss';
import Preloader from "../common/preloader/Preloader";
import User from "./User";
import Paginator from "../common/Paginator/Paginator";

function Users({ users, isFetching, toggleFollowing, followingInProgress, onPageChanged, currentPage, pageSize, totalUsersCount }) {
    return (
        <div className={styles.usersList}>
            {isFetching
                ? <Preloader/>
                : users.map(u =>
                    <User key={u.id} user={u} toggleFollowing={toggleFollowing}
                          followingInProgress={followingInProgress}/>
                )
            }
            <Paginator
                onPageChanged={onPageChanged}
                currentPage={currentPage}
                pageSize={pageSize}
                totalItemsCount={totalUsersCount}
            />
        </div>
    )
}

export default Users