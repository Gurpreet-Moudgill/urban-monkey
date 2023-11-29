import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import itemimg1 from './data1';
// import DropdownButton from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import Spotted from './Spotted';
function Hats() {
  const [data, setData] = useState([]);

  const product = async () => {
    const resp = await axios.get("http://localhost:8081/product/get");
    console.log(resp.data.products);
    setData(resp.data.products);
  };

  useEffect(() => {
    product();

  }, []);

  const handleChange = async (e) => {
    const newData = e.target.value.split('-');
    const newData1 = e.target.value;
    console.log(newData);

    if (e.target.value === "lowtohigh") {
      const data1 = await axios.get("http://localhost:8081/product/get/price");
      setData(data1.data.products);
    } else if (e.target.value === "hightolow") {
      const data2 = await axios.get("http://localhost:8081/product/get/find");
      setData(data2.data.products);
    } else if (e.target.value === "500-1000") {
      const data3 = await axios.get(
        `http://localhost:8081/product/get/data?price=${Number(
          newData[0]
        )}&value2=${Number(newData[1])}`
      );
      setData(data3.data.products);
    } else if (e.target.value === "1000-4000") {
      const data3 = await axios.get(
        `http://localhost:8081/product/get/data?price=${Number(
          newData[0]
        )}&value2=${Number(newData[1])}`
      );
      setData(data3.data.products);
    } else if (e.target.value === "new") {
      const data4 = await axios.get(
        `http://localhost:8081/product/get/bro?stock=${newData1}`
      );
      console.log(newData1[0]);
      setData(data4.data.products);
    } else if (e.target.value === "popularity") {
      const data4 = await axios.get(
        `http://localhost:8081/product/get/bro?stock=${newData1}`
      );
      // console.log(newData1[0]);
      setData(data4.data.products);
    }
    else if (e.target.value === "featured") {
      const data5 = product();
      // console.log(newData1[0]);
    }
  }
  
  return (
    <>
      <div>
        <span className="collab1">HATS & CAPS</span>
      </div>

      <div className="featured">
        <select onChange={handleChange} className="feact">
          <option value='featured'>Featured</option>
          <option value='popularity' href="#/action-1">Popularity</option>
          <option value='new' href="#/action-2">What's New</option>
          <option value='lowtohigh' href="#/action-3">Price: Low To High</option>
          <option value='hightolow' href="#/action-4">Price: High To Low </option>
          <option value='500-1000' href="#/action-5">Range: Rs.500-Rs.1000 </option>
          <option value='1000-4000' href="#/action-6">Range: Rs.1000-Rs.4000</option>
        </select>
      </div>

      <br></br>

      <p className="collaba"></p>
      <div className="container section-3 ">
        <div className="row py-3">
          <Row xs={1} md={3} className="g-4">
            {data.filter((item) => item.category === "Cap" ).map((item, index) => (
              <Col key={index}>
                <Card className="hats">
                  <Card.Img variant="top" src={item.imageUrl} alt="img" />

                  <Card.Body>
                    <Card.Title>{item.description} </Card.Title>
                    <Card.Text>RS.{item.price}.00</Card.Text>
                    <Button className="" variant="" id="btn11">
                      Add to card
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </div>
      <Spotted/>
    </>
  );
}

export default Hats
