import styles from './MyPosts.module.scss';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, minLength, requiredField} from "../../../redux/utilities/validators/validators";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength10 = maxLength(10)
const minLength2 = minLength(2)

function MyPosts(props) {

    const addNewPost = values => {
        props.addPost(values.post)
    }

    return (
        <div className={styles.myPosts}>
            <h2>My posts</h2>
            <div className={styles.newPost}>
                <PostReduxForm onSubmit={addNewPost}/>
            </div>
            <ul className={`${styles.posts} list-group`}>
                {props.posts
                    .map((p) => <Post
                        key={p.id} id={p.id}
                        message={p.message}
                        likesCount={p.likesCount}
                        likePost={props.likePost}
                    />)
                }
            </ul>
        </div>
    )
}

function PostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className="input-block">
                <Field
                    placeholder="Начинайте писать пост"
                    name={'post'}
                    component={Textarea}
                    validate={[requiredField, maxLength10, minLength2]}
                />
            </div>
            <button className="btn btn-primary mt-3">Add Post</button>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'postForm'})(PostForm)

export default MyPosts