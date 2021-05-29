import axios from "axios";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { googleSignIn } from "../../Firebase/FirebaseAuthentication";
import {
  setIsAdmin,
  setIsLoggedIn,
  setUserInfo,
} from "../../redux/slices/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const signInWithGoogle = () => {
    googleSignIn().then((res) => {
      handleResponse(res, res.success);
    });
  };

  const handleResponse = (res, success) => {
    if (success) {
      const postData = {
        name: res.displayName,
        email: res.email,
        image: res.photoURL,
      };

      const uri = `http://localhost:5000/user`;
      axios
        .post(uri, postData)
        .then(function (response) {
          const userData = response.data.data;
          dispatch(setIsAdmin(userData.role === "Admin"));
          dispatch(setIsLoggedIn(true));
          dispatch(setUserInfo(userData));
          history.replace(from);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
      // setLoggedInUserInfo(res);
      // history.replace(from);
    } else {
      console.log(res.error);
    }
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <button onClick={() => signInWithGoogle()} className="btn btn-danger">
        Login with Google
      </button>
    </div>
  );
};

export default Login;
