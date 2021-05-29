import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MostReaded.css";

const MostReaded = () => {
  const [mostReadedBook, setMostReadedBook] = useState([]);
  useEffect(() => {
    const uri = `https://shrouded-crag-01009.herokuapp.com/book`;
    // const uri = `http://localhost:5000/book?category=Computers%20and%20Tech`;
    axios
      .get(uri)
      .then(function (response) {
        setMostReadedBook(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="container">
      <div className="row">
        <h2>Most Readed Book </h2>
        {mostReadedBook.map((mrBook, index) => (
          <div key={index} className="col-md-3 col-sm-6 ">
            <div className="product-grid cardDesign">
              <div className="product-image">
                <a href="/#" className="image">
                  <img className="pic-1" alt="" src={mrBook.image} />
                  <img className="pic-2" alt="" src={mrBook.image} />
                </a>
              </div>
              <div className="product-content text-center">
                <h3 className="title">
                  <a href="/#">{mrBook.name}</a>
                </h3>
                <span>{mrBook.category}</span>
                <ul className="rating">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostReaded;
