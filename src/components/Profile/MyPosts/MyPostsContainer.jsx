import {addPost, likePost} from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

/*const oldMyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().profilePage;

                    let addPost = () => {
                        store.dispatch(addPost());
                    }
                    let onPostChange = (text) => {
                        let action = updateNewPostText(text);
                        store.dispatch(action);
                    }

                    return <MyPosts
                        updateNewPostText={onPostChange}
                        addPost={addPost}
                        state={state}
                    />
                }
            }
        </StoreContext.Consumer>
    );
}*/

let mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        postID: state.profilePage.posts.length
    }
}

export default connect(mapStateToProps,{addPost, likePost}) (MyPosts);