import React from 'react';
import './App.css';
import {Redirect, Route, Switch} from "react-router";
import AuthPage from "./pages/authPage/AuthPage";
import NewsPage from "./pages/newsPage/NewsPage";
import {NewsItem} from "./components/NewsCard/newsItem/newsItem";

function App() {
    const isLogin = window.localStorage.getItem('UserID');
    return (
        <div className='App'>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/newsPage"/>
                </Route>

                <Route
                    exact
                    path="/newsPage"
                    render={() => <NewsPage/>}
                >
                </Route>
                <Route
                    exact
                    path="/auth"
                    render={() => <AuthPage/>}
                />
                <Route
                    exact
                    path='/newsPage/newsItem/:id'
                    render={() =>  isLogin ? <NewsItem/>: <AuthPage/>}
                >
                </Route>
            </Switch>
        </div>
    );
}

export default App;
