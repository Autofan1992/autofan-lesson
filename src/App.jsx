import React, { useEffect, Suspense } from 'react';
import { BrowserRouter, Route, withRouter } from "react-router-dom";
import Settings from "./components/Settings/Settings";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Navbar from "./components/Navbar/Navbar";
import ToDoListContainer from "./components/ToDoList/ToDoListContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import WeatherContainer from "./components/Weather/WeatherContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { compose } from "redux";
import { initializeApp } from "./redux/reducers/app-reducer";
import Preloader from "./components/common/preloader/Preloader";
import { getAppInit } from "./redux/selectors/app-selectors";
import store from "./redux/redux-store";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));

function App({ initialized, initializeApp }) {
    let init = initializeApp

    useEffect(() => {
        init()
    }, [init, initialized])

    if (!initialized) {
        return <Preloader/>
    }
    return (
        <main className="pageWrapper">
            <div className="container">
                <div className="appWrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="appContent">
                        <Suspense fallback={<Preloader/>}>
                            <Route path="/login" render={() => <Login/>}/>
                            <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                            <Route path="/news" render={() => <News/>}/>
                            <Route path="/music" render={() => <Music/>}/>
                            <Route path="/settings" render={() => <Settings/>}/>
                            <Route path="/todolist" render={() => <ToDoListContainer/>}/>
                            <Route path="/users" render={() => <UsersContainer/>}/>
                            <Route path="/weather" render={() => <WeatherContainer/>}/>
                        </Suspense>
                    </div>
                </div>
            </div>
        </main>
    )
}

const mapStateToProps = state => ({
    initialized: getAppInit(state)
})

const AppContainer = compose(
    connect(mapStateToProps, { initializeApp }),
    withRouter
)(App)

export default function SocialApp() {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
}