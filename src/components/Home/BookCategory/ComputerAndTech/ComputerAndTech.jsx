import React, { useEffect, useState } from "react";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/slices/cartSlice";

const ComputerAndTech = () => {

  //add to cart 
  const dispatch = useDispatch()

    const [computerAndTech, setComputerAndTech] = useState([]);
    useEffect(() => {
     const uri = `https://shrouded-crag-01009.herokuapp.com/book?category=Computers%20and%20Tech`;
      axios
        .get(uri)
        .then(function (response) {
            setComputerAndTech(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);
    return (
        <div className="container py-5">
          <div className="row">
            <h2> Computer And Tech </h2>
            {computerAndTech.map((catBook, index) => (
              <div key={index} className="col-md-3 col-sm-6">
                <div className="product-grid cardDesign my-1">
                  <div className="product-image">
                      <img className="pic-1" alt="" src={catBook.image} />
                      <img className="pic-2" alt="" src={catBook.image} />
                  </div>
                  <div className="product-content pt-3 text-center">
                    <h3 className="title">
                      <strong>{catBook.name}</strong>
                    </h3>
                    <span>Category: {catBook.category} </span>
                    <p> <strong onClick={()=> dispatch(addToCart(catBook))} className='add-to-cart'>Get Book <FontAwesomeIcon icon={faArrowCircleRight}/></strong>  </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default ComputerAndTech;