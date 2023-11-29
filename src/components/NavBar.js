import React, { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { SlUser } from "react-icons/sl";
import { BsHeart } from "react-icons/bs";
import { PiShoppingCartSimple } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import urbanmonkey from "../images/urbanmonkey.jpg";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "axios";

function NavBar() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  const [isDivVisible, setDivVisibility] = useState(false);

  const handleMouseEnter = () => {
    setDivVisibility(true);
  };

  const product = async () => {
    const resp = await axios.get("https://ecommerce-backend-e1gq.onrender.com/product/get");
    // console.log(resp.data.products);
    setData(resp.data.products);
  };

  useEffect(() => {
    product();
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  const onSearch = (searchItem) => {
    setValue(searchItem);
  };
  return (
    <>
      <div className="A">
        <a className="a1" href="/">
          <AiOutlineMail />
          hello@urbanmonkey.com
        </a>
        <a className="a2" href="/">
          shop new arrivals
        </a>
      </div>

      <div className="main ">
        <div className="logo">
          <NavLink to="/home">
            <img src={urbanmonkey} alt="logoimg" />
          </NavLink>
        </div>

        <div class="middle mx-2">
          <div>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                All Categories
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <NavLink to="/steals" className="li">
                  <Dropdown.Item href="#/action-1">
                    All Categories
                  </Dropdown.Item>
                </NavLink>
                <NavLink to="/accessories" className="li">
                  <Dropdown.Item href="#/action-2">Accessories</Dropdown.Item>
                </NavLink>
                <NavLink to="/apparel" className="li">
                  <Dropdown.Item href="#/action-3">Apparel</Dropdown.Item>
                </NavLink>
                <NavLink to="/eyewear" className="li">
                  <Dropdown.Item href="#/action-4">Eyewear </Dropdown.Item>
                </NavLink>
                <NavLink to="/accessories" className="li">
                  <Dropdown.Item href="#/action-5">FaceMask</Dropdown.Item>
                </NavLink>
                <NavLink to="/accessories" className="li">
                  <Dropdown.Item href="#/action-7">Handwear</Dropdown.Item>
                </NavLink>
                <NavLink to="/accessories" className="li">
                  <Dropdown.Item href="#/action-8">keychains</Dropdown.Item>
                </NavLink>
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div>
            <form class="d-flex" role="search">
              <input
                onChange={handleChange}
                value={value}
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onMouseEnter={handleMouseEnter}
                
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            { ( isDivVisible && value.length > 0) && (
              <div className="container1">
                <div className="product-list">
                  <div className="product">
                    {data
                      .filter((item) => {
                        const searchItem = value;
                        const name = item.name;
                        return (
                          searchItem &&
                          name.startsWith(searchItem) &&
                          name !== searchItem
                        );
                      })
                      .slice(0, 5)
                      .map((item) => (
                        <>
                          <img src={item.imageUrl} alt="product" />
                          <div
                            className="p-details"
                            onClick={() => onSearch(item.name)}
                            key={item.name}
                          >
                            <h2>{item.name}</h2>
                            <h3>RS.{item.price}</h3>
                          </div>
                        </>
                      ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="icons-mains">
          <NavLink to='/Login' className="user "><span className="icon00"><SlUser /></span></NavLink>
          <NavLink to='/heart' className="user mx-3"><span className="icon00"><BsHeart /></span></NavLink>
          <NavLink to='/Cart' className="user"><span className="icon00"><PiShoppingCartSimple/></span></NavLink>
          
        </div>

      </div>
      <div>
        <ul className="lists">
          <NavLink to="/hats&caps" className="li">
            <li>hats&caps</li>
          </NavLink>
          <NavLink to="/skatboad" className="li">
            <li>skateboards</li>
          </NavLink>
          <NavLink to="/eyewear" className="li">
            <li>eyewear</li>
          </NavLink>
          <NavLink to="/apparel" className="li">
            <li>apparel</li>
          </NavLink>
          <NavLink to="/accessories" className="li">
            <li>accessories</li>
          </NavLink>
          <NavLink to="/collabrations" className="li">
            <li>collabrations</li>
          </NavLink>
          <NavLink to="/steals" className="li">
            <li>um steals</li>
          </NavLink>
          <NavLink to="/about us" className="li">
            <li>about us</li>
          </NavLink>
        </ul>
      </div>
    </>
  );
}

export default NavBar;
