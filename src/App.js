import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
