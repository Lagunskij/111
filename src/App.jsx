import React from "react";
import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Main} from "./components/main/Main";
import {Card} from "./components/card/card";
import {Error} from "./components/main/Error";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/card/:username/:reponame" component={Card}/>
                    <Route path="/error" component={Error}/>
                    <Redirect to={"/"} />
                </Switch>

            </div>
        </BrowserRouter>

    );
}

export default App;
