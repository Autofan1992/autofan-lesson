import {addNewMessage} from "../../redux/reducers/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {getDialogs, getMessages} from "../../redux/selectors/dialogs-selectors";

/*const OldDialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().dialogsPage;

                    let addNewMessage = () => {
                        store.dispatch(addMessage());
                    };

                    let onMessageChange = (text) => {
                        let action = updateNewMessageText(text);
                        store.dispatch(action);
                    };
                    return <Dialogs
                        addNewMessage={addNewMessage}
                        onMessageChange={onMessageChange}
                        state={state}
                    />
                }
            }
        </StoreContext.Consumer>
    );
}*/

const mapStateToProps = (state) => {
    return {
        dialogs: getDialogs(state),
        messages: getMessages(state),
    }
}

export default compose(
    connect(mapStateToProps, {addNewMessage}),
    withAuthRedirect
)(Dialogs)
