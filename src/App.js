import React from 'react';
import './App.module.css';
import Login from "./components/Login/Login";
import Users from "./components/Users/Users";
import {connect} from "react-redux";
import {withRouter, Route} from "react-router-dom";
import {compose} from "redux";
import Profile from "./components/Profile/Profile";
import CreateUser from "./components/Users/CreateUser/CreateUser";
import styles from "./App.module.css"


const App = (props) => {
    return (
        <div className={styles.App}>
            {/*Проверка на авторизацию*/}
            {props.isAuth ?
                <div className={styles.App}>
                    <Route exact path="/Users" render={() => <Users/>}/>
                    <Route path="/Profile/:userId" render={() => <Profile/>}/>
                    <Route path="/Users/create" render={() => <CreateUser/>}/>
                </div>
                :
                <Login history={props.history}/>
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth,
        token: state.auth.token
    }
}
const appCompose = compose(
    withRouter,
    connect(mapStateToProps, null)
)(App)
export default appCompose;
