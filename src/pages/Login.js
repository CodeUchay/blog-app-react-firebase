import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let navigate = useNavigate();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      //Store data into local storage. can be viewed on web application
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      //redirect to homepage after login 
      navigate("/");
    });
  };

  return (
    <div className="loginPage">
      <p><u> Sign In With Google to Continue </u></p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
