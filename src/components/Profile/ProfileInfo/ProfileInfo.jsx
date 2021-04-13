import styles from './ProfileInfo.module.scss';
import Preloader from "../../common/preloader/Preloader";
import profileThumbnailBig from "../../../../src/images/profile-thumbnail.jpg";
import ProfileStatusWithHooks from "./ProfileStatus";
import ProfileAvatar from "./ProfileAvatar";

const ProfileInfo = ({ profile, userID, isOwner, status, updateUserStatus, statusChangeResult, updateUserAvatar }) => {

    if (!profile) {
        return <Preloader/>
    }

    return (
        <div className={styles.profileInfo}>
            <div className={styles.thumbImg}>
                <img src={profileThumbnailBig} alt="thumbnail"/>
            </div>
            <div className={styles.authorInfo}>
                <div className={styles.topInfo}>
                    <ProfileAvatar
                        isOwner={isOwner}
                        avatar={profile.photos.large}
                        savePhoto={updateUserAvatar}
                    />
                    <div className={styles.infoBlock}>
                        <ProfileStatusWithHooks
                            isOwner={isOwner}
                            userID={userID} status={status}
                            statusChangeResult={statusChangeResult}
                            updateUserStatus={updateUserStatus}
                        />
                        <p><span className="fw-bold">Полное Имя:</span> {profile.fullName}</p>
                        <p><span
                            className="fw-bold">В поисках работы:</span> {profile.lookingForAJob ? 'Да' : 'Нет'}
                        </p>
                        {profile.lookingForAJob
                        && <p>{profile.lookingForAJobDescription}</p>
                        }
                    </div>
                </div>
                <div className={styles.about}>
                    <p><b>Обо мне</b></p>
                    <p>{profile.aboutMe}</p>
                </div>
                <div className={styles.contacts}>
                    <p><b>Я в соцсетях:</b></p>
                    {Object.entries(profile.contacts).map(([title, url]) => (
                        url ? <a target="_blank" rel="noreferrer" key={url} href={`https://${url}`}>{title}</a> : null
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ProfileInfo