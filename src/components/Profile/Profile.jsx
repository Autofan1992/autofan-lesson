import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

function Profile (props) {
    return (
        <>
            <ProfileInfo {...props} />
            <MyPostsContainer/>
        </>
    )
}
export default Profile