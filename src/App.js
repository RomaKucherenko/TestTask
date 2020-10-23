import React from 'react';
import './App.css';
import Login from "./components/Login/Login";
import Users from "./components/Users/Users";
import {connect} from "react-redux";
import {withRouter, Route} from "react-router-dom";
import {compose} from "redux";
import Profile from "./components/Profile/Profile";
import CreateUser from "./components/Users/CreateUser/CreateUser";


const App = (props) => {
    if (!props.isAuth){
        //props.history приходит в app из withRouter
        return <Login history={props.history}/>
    }
    return (
            <div className="App">
                <Route exact path="/Users" render={() => <Users/>}/>
                <Route path="/Profile/:userId" render={() => <Profile/>}/>
                <Route path="/Users/create" render={() => <CreateUser/>}/>
            </div>
    );
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
