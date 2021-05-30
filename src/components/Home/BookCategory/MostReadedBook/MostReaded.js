import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/slices/cartSlice";
import "./MostReaded.css";

const MostReaded = () => {
  //add to cart
  const dispatch = useDispatch();

  //api calling
  const [mostReadedBook, setMostReadedBook] = useState([]);
  useEffect(() => {
    const uri = `https://shrouded-crag-01009.herokuapp.com/book`;
    axios
      .get(uri)
      .then(function (response) {
        setMostReadedBook(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  // console.log(cart[0]?.author.name);
  return (
    <div className="container">
      <div className="row">
        <h2> Most Readed Book </h2>
        {mostReadedBook.slice(8, 16).map((mrBook, index) => (
          <div key={index} className="col-md-3 col-sm-6">
            <div className="product-grid cardDesign my-1">
              <div className="product-image">
                <img className="pic-1" alt="" src={mrBook.image} />
                <img className="pic-2" alt="" src={mrBook.image} />
              </div>
              <div className="product-content pt-3 text-center">
                <h3 className="title">
                  <strong>{mrBook.name}</strong>
                </h3>
                <span>Category: {mrBook.category} </span>
                <p>
                  {" "}
                  <strong
                    onClick={() => dispatch(addToCart(mrBook))}
                    className="add-to-cart"
                  >
                    Get Book <FontAwesomeIcon icon={faArrowCircleRight} />
                  </strong>{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostReaded;
