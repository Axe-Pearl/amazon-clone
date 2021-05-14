import './App.css';
import Header from "./Header";
import Home from "./Home";
import Basic from "./basic";
import Checkout from "./checkout";
import Login from "./Login";
import Payment from "./Payment";
import { useEffect } from "react";
import { useStateValue} from "./StateProvider";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { auth } from './firebase';
function App() {
  const [{},dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser=>{
      console.log("The user is :",authUser);
      if(authUser){
          dispatch({
             type:"SET_USER",
             user:authUser
          });
      }
      else{
           dispatch({
             type:"SET_USER",
             user:null
           })
      }
    })
  },[])
  return (
    <Router>
    <div className="app">
      <Switch>
      <Route path="/payment">
         <Header />
         <Payment />
      </Route>
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
