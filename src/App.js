
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Main} from "./components/Main";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
<Route path="/" component={Main}/>
        </div>
      </BrowserRouter>

  );
}

export default App;
