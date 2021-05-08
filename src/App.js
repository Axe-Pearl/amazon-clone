import './App.css';
import Header from "./Header";
import Home from "./Home";
import Basic from "./basic";
import Checkout from "./checkout";
import Login from "./Login"
//import Product from "./product"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="app">
      <Switch>
        <Route path="/login">
         <Login />
        </Route>
        <Route path="/checkout">
          <Header />
           <Checkout />
        </Route>
        <Route path="/amazon-basics">
           <Header />
           <Basic />
        </Route>
        <Route path="/">
          <Header />
         <Home />
        </Route>
      </Switch>
      </div>
      </Router>
  );
}

export default App;
