import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminRoute from "./AuthRoute/AdminRoute";
import AuthRoute from "./AuthRoute/AuthRoute";
import PreLoader from "./components/PreLoader/PreLoader";
import { fireAuth } from "./Firebase/FirebaseAuthentication";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import {
  setIsAdmin,
  setIsLoggedIn,
  setUserInfo,
} from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const [loadingPage, setLoadingPage] = useState(true);

  // Check user allready loggedin or not
  useEffect(() => {
    fireAuth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const uri = `http://localhost:5000/user/${userAuth.email}`;
        axios
          .get(uri)
          .then(function (response) {
            const userData = response.data.data[0];
            dispatch(setIsAdmin(userData.role === "Admin"));
            dispatch(setIsLoggedIn(true));
            dispatch(setUserInfo(userData));
            setLoadingPage(false);
          })
          .catch(function (error) {
            // handle error

            console.log(error);
          });
      } else {
        dispatch(setIsAdmin(false));
        dispatch(setIsLoggedIn(false));
        dispatch(setUserInfo({}));
        setLoadingPage(false);
        console.log("not loged in");
      }
    });
  }, [dispatch]);

  return loadingPage ? (
    <div>
      <PreLoader />
    </div>
  ) : (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <AuthRoute path="/dashboard/user"></AuthRoute>
          <AdminRoute path="/dashboard/admin"></AdminRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
