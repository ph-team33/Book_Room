import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import {
  googleSignIn,
  signInWithEmailAndPassword,
} from "../../Firebase/FirebaseAuthentication";
import {
  setIsAdmin,
  setIsLoggedIn,
  setUserInfo,
} from "../../redux/slices/authSlice";

const Login = () => {
  const isLoggedIn = useSelector((state) => state.auths.isLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  if (isLoggedIn) {
    history.push("./");
  }
  const [inputData, setInputData] = useState({});

  const handleInputChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };
  console.log(inputData);

  const signInWithGoogle = () => {
    googleSignIn().then((res) => {
      handleResponse(res, res.success);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(inputData.email, inputData.password).then(
      (res) => {
        handleResponse(res, res.success);
      }
    );
  };

  const handleResponse = (res, success) => {
    if (success) {
      const postData = {
        name: res.displayName,
        email: res.email,
        image: res.photoURL,
      };

      const uri = `https://shrouded-crag-01009.herokuapp.com/user`;
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
          console.log(error);
        });
    } else {
      console.log(res.error);
    }
  };
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: "70vh" }}
    >
      <h1>Sign In</h1>
      <div className="col-md-4">
        <form onSubmit={handleSubmit} className="form text-center">
          <input
            name="email"
            onChange={handleInputChange}
            className="form-control"
            type="text"
            placeholder="admin@bookroom.app"
          ></input>
          <input
            name="password"
            onChange={handleInputChange}
            className="form-control"
            type="password"
            placeholder="123456"
          ></input>
          <button className="btn btn-primary w-100" type="submit">
            Login
          </button>
        </form>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-danger w-100"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
