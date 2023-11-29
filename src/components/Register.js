import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiOutlineFacebook } from 'react-icons/ai';
import {AiFillGoogleCircle} from 'react-icons/ai';
import Spotted from './Spotted';
import axios from 'axios';


function Register() {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    console.log(data);
  };

  const enter = async () => {
    const resp = await axios.post("https://ecommerce-backend-e1gq.onrender.com/login/post", data);
    console.log(resp.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    enter();
    navigate("/login");
  };
  return (
    <div>
      <div>
        <div className="login">REGISTER</div>
        <br />
        <p className="collaba"></p>
      </div>
      <br />
      <div>
        <Form className="form">
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="email1">First Name</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="Fname"
              type="text"
              placeholder="First Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label className="email1">Last Name</Form.Label>
            <Form.Control
              type="text"
              onChange={handleChange}
              name="Lname"
              placeholder="Last Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="email1">Email*</Form.Label>
            <Form.Control
              type="email"
              onChange={handleChange}
              name="email"
              className="enter"
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
            <br />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="email1">Password*</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
            />
            <a href="" className="forgot ">
              Forgot your password?
            </a>

            <div className="sign_button">
              <Button
                onClick={handleSubmit}
                type="button"
                variant=""
                className="form-control my-2"
              >
                REGISTER
              </Button>
            </div>
            <NavLink to="/login" className="customer">
              Already have a account? Login here
            </NavLink>
            <br />

            <div className="buttons">
              <div>
                <Button type="button" variant="" className="facebook">
                  Facebook login{" "}
                  <span className="icon_size" type="button">
                    <AiOutlineFacebook />
                  </span>
                </Button>
              </div>

              <div>
                <Button type="button" variant="" className="google">
                  Google Login
                  <span className="icon_size" type="button">
                    <AiFillGoogleCircle />
                  </span>
                </Button>
              </div>
            </div>
          </Form.Group>
        </Form>
      </div>
      <br />
      <Spotted />
    </div>
  );
}

export default Register;
