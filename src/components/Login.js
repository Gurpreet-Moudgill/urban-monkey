import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { RxDashboard } from "react-icons/rx";
import { AiOutlineHeart } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";
import Spotted from "./Spotted";
import { NavLink } from "react-router-dom";
import Register from "./Register";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState("");
  const [data1, setData1] = useState({});
  const navigate = useNavigate();

  //Fetching Data from the Login API
  const product = async () => {
    const resp = await axios.get("http://localhost:8081/login");
    console.log(resp.data.details);
    setData1(resp.data.details);
  };

  useEffect(() => {
    product();
  }, []);

  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const getFname = localStorage.getItem("fnameData");
  const getLname = localStorage.getItem("lnameData");

  // Login button logic
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(
        `http://localhost:8081/a?email=${email}&password=${password}`
      );
      setData(resp.data);
      console.log(data);

      if (data) {
        console.log(`Login successful! Welcome, ${data.detail.Fname}`);
        alert(`Login successful! Welcome, ${data.detail.Fname}`);
        localStorage.setItem("emailData", data.detail.email);
        localStorage.setItem("passwordData", data.detail.password);
        localStorage.setItem("fnameData", data.detail.Fname);
        localStorage.setItem("lnameData", data.detail.Lname);
      }
    } catch (error) {
      console.log("error");
      alert("Login Failed");
    }
  };

  // Logout button
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      {/* if login details are true then first condition will run */}
      {getEmail && getPassword ? (
        <div>
          <div>
            <span className="collab1"> MY ACCOUNT</span>
            <br />
            <p className="collaba"></p>
          </div>

          <div className="d-flex my-5">
            <div className="leftside">
              <ul className="">
                <li>
                  {" "}
                  <a href="">
                    <RxDashboard /> Dashboard
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="">
                    {" "}
                    <AiOutlineHeart />
                    Wishlist{" "}
                  </a>
                </li>
                <li>
                  {" "}
                  <a href="" onClick={logout}>
                    <FiLogOut />
                    Logout
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="atul">
                Hello {getFname + " " + getLname} (not
                {" " + getFname + " " + getLname} ?{" "}
                <a className="logout" onClick={logout}>
                  Log out
                </a>
                )
              </p>
              <b className="order">Order History:</b>
              <p className="main-make">
                <a className="make" href="/">
                  Make your first order{" "}
                </a>
                You haven't placed any orders yet.
              </p>

              <div className="Main-Account">
                <b className="Account">Account details :</b>
                <div className="main-table">
                  <table className="table table-bordered">
                    <tbody className="kumar">
                      <tr>
                        <td>
                          <strong>Name</strong>
                        </td>
                        <td>{getFname + " " + getLname}</td>
                      </tr>

                      <tr>
                        <td>
                          <strong>email</strong>
                        </td>
                        <td>{getEmail}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="worn">WORN BY YOUR FAVOURITE CELEBRITIES</p>
                <p className="REDEFINING">
                  REDEFINING STREET STYLE WITH URBAN MONKEY!
                </p>
                <p> tag us @urbanmonkeyindia for a chance to be featured </p>
              </div>
            </div>
          </div>
          <div className="last">
            <Spotted />
          </div>
        </div>
      ) :(
        <div>
          <div>
            <div className="login">LOGIN</div>
            <br />
            <p className="collaba"></p>
          </div>
          <br />
          <div>
            <Form className="form">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="email1">Email*</Form.Label>
                <Form.Control
                  onChange={(e) => setEmail(e.target.value)}
                  name="email"
                  type="email"
                  value={email}
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
                  onChange={(e) => setPassword(e.target.value)}
                  name="password"
                  type="password"
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
                    SIGN-IN
                  </Button>
                </div>
                <NavLink to="/Register" className="customer">
                  New customer? Create your account
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
          <Spotted />
        </div>
      )}
    </>
  );
}

export default Login;
