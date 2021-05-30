import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AdminRoute from "./AuthRoute/AdminRoute";
import AuthRoute from "./AuthRoute/AuthRoute";
import Contact from "./components/Contact/Contact";
import PreLoader from "./components/PreLoader/PreLoader";
import Footer from "./components/Shared/Footer/Footer";
import Header from "./components/Shared/Header/Header";
import SweetAlert from "./components/SweetAlert/SweetAlert";
import { fireAuth } from "./Firebase/FirebaseAuthentication";
import AllBooks from "./page/AllBooks/AllBooks";
import Cart from "./page/Cart/Cart";
import Category from "./page/Category/Category";
import ManageUser from "./page/Dashboard/Admin/ManageUser/ManageUser";
import Review from "./page/Dashboard/User/AddReview/AddReview";
import Order from "./page/Dashboard/User/Order/Order";
import UserProfile from "./page/Dashboard/User/UserProfile/UserProfile";
import Home from "./page/Home/Home";
import Login from "./page/Login/Login";
import NotMatch from "./page/NotMatch/NotMatch";
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
        const uri = `https://shrouded-crag-01009.herokuapp.com/user/${userAuth.email}`;
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
      <SweetAlert />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/books">
            <AllBooks />
          </Route>
          <Route path="/category">
            <Category/>
          </Route>
          <AuthRoute path="/dashboard/user">
            <UserProfile />
          </AuthRoute>
          <AuthRoute path="/dashboard/order">
            <Order />
          </AuthRoute>
          <AuthRoute path="/dashboard/review">
            <Review />
          </AuthRoute>
          <AdminRoute path="/dashboard/admin">
            <ManageUser />
          </AdminRoute>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
