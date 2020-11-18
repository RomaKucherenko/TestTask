import React, {useEffect} from 'react';
import './App.module.css';
import Users from "./components/Users/Users";
import {withRouter, Redirect, Route} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import CreateUser from "./components/Users/CreateUser/CreateUser";
import styles from "./App.module.css"
import {initializeApp} from "./Redux/authReducer";
import {connect} from "react-redux";
import Login from "./components/Login/Login";

const useInitializeApp = (initializeApp, setIsInitializing) => {
    useEffect(() => {

        initializeApp().then(
            () => setIsInitializing(false)

        )
    }, [])
}

const useCheckLastPathname = (isAuth, history, lastPath) => {
    useEffect(() => {
        if ( isAuth ){
            if( !!localStorage.getItem('lastPath') ) {
                history.push(localStorage.getItem('lastPath'))
            }
            else history.push("/Users")
        }
        else history.push("/Login")
    },[isAuth])
}

const App = ({initializeApp, isAuth, history, lastPath}) => {
    let [isInitializing, setIsInitializing] = React.useState(true)

    useInitializeApp(initializeApp, setIsInitializing)

    useCheckLastPathname(isAuth, history, lastPath)


    return (
        <div className={styles.App}>
            {isInitializing ?
                <div>
                    ...Loading...
                </div>
                :
                <>
                    <Route exact path="/Users" render={() => <Users/>}/>
                    <Route path="/Profile/:userId" render={() => <Profile/>}/>
                    <Route path="/Users/create" render={() => <CreateUser/>}/>
                    <Route path="/Login" render={() => <Login/>}/>
                </>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
        isAuth: state.auth.isAuth,
        lastPath: state.auth.lastPath
    }
}

export default withRouter(connect(mapStateToProps, {initializeApp})(App));
