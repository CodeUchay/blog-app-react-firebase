import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";
import { FaBook } from 'react-icons/fa';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      //cant use use navigate outside router
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to="/"> <FaBook/> Uche's Diary </Link>
        <div>
        {!isAuth ? (
          <Link to="/login"> <button className="loginBtn"> Login </button> </Link>
          //Only see create post when logged in
        ) : (
          <>
            <Link to="/createpost"> Create Post </Link>
            <button className="loginBtn" onClick={signUserOut}> Log Out</button>
          </>
        )}
        </div>
      </nav>
      <main>
      <Routes>
        <Route path="/" element={<Home isAuth={isAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
      </main>
    </Router>
  );
}

export default App;
