import React,{useState} from 'react';
import "./Login.css";
import { Link,useHistory } from "react-router-dom";
import {auth} from "./firebase";

function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const history = useHistory();
    const signin=(e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            history.push("/");
        })
        .catch(error => alert(error.message));
    }
    const register=(e)=>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth) => {
            console.log(auth);
            if(auth){
                history.push("/");
            }
        })
        .catch(error => alert(error.message));
    }
    return (
        <div className="login">
        <Link to="/Home">
        <img className="amazon_logo" alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"></img>
        </Link>
        <div className="login_container">
            <h3>Sign-in</h3>
            <form className="login_form">
                <h5>E-mail</h5>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" />
                
                <h5>Password</h5>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" />
                
                <button type="submit" onClick={signin} className="signin_btn">Sign In</button>

                <p>
                By continuing, you agree to Amazon's Conditions of 
                Use and Privacy Notice.
                </p>

                <button type="submit" onClick={register} className="signup_btn">Create your Amazon account</button>
            </form>
        </div>
        </div>
    )
}

export default Login;
