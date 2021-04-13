import styles from './ProfileInfo.module.scss'
import thumbnail from "../../../images/profile-thumbnail-big.jpg";
import Preloader from "../../common/preloader/Preloader";

function ProfileAvatar({ isOwner, avatar, savePhoto, changeInProgress }) {

    const handleAvatarChange = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={styles.avatar}>
            {changeInProgress && <Preloader/>}
            <img src={avatar ?? thumbnail} alt=""/>
            {isOwner && <input type={'file'} onChange={handleAvatarChange}/>}
        </div>
    )
}

export default ProfileAvatar