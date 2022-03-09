import './App.css';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {Main} from "./components/Main";
import {Card} from "./components/card/card";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/card" component={Card}/>
                    <Redirect to={"/"} />
                </Switch>

            </div>
        </BrowserRouter>

    );
}

export default App;
