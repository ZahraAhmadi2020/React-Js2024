import React, { useState } from "react";
import { Alert, Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { GoogleButton } from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import google from "../../assets/icons/google.svg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const emailChange = (e) => {
    setEmail(e.target.value);
  };
  const passChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogle = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="m-5 ">
        <h3> Login Now</h3>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <FormGroup className="mb-3" controlId="email">
            <FormControl
              type="email"
              placeholder="Email"
              onChange={emailChange}
            />
          </FormGroup>
          <FormGroup className="mb-3" controlId="password">
            <FormControl
              type="password"
              placeholder="Password"
              onChange={passChange}
            />
          </FormGroup>
          <div>
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <hr />

        <button
          onClick={handleGoogle}
          className="btn d-flex text-center btn-sm py-2 btn-primary w-100 justify-content-center"
        >
          <img src={google} className="gbtn  " />
          <p className="text-muted mt-2 ms-2">Sign up with google account</p>
        </button>

        <div className="my-2 btn">
          Don't have an account?
          <Link to="/signup"> Sign Up</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
