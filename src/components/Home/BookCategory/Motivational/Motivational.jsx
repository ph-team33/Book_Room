import React, { useEffect, useState } from "react";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../../redux/slices/cartSlice";

const Motivational = () => {
   //add to cart 
   const dispatch = useDispatch();
  
    const [motivationalBook, setMotivationalBook] = useState([]);
    useEffect(() => {
     const uri = `https://shrouded-crag-01009.herokuapp.com/book?category=Motivational%20Books`;
      axios
        .get(uri)
        .then(function (response) {
            setMotivationalBook(response.data.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }, []);

   
    return (
        <div className="container py-5">
          <div className="row">
            <h2> Motivational Book </h2>
            {motivationalBook.slice(0,8).map((motivBook, index) => (
              <div key={index} className="col-md-3 col-sm-6">
                <div className="product-grid cardDesign my-1">
                  <div className="product-image">
                      <img className="pic-1" alt="" src={motivBook.image} />
                      <img className="pic-2" alt="" src={motivBook.image} />
                  </div>
                  <div className="product-content pt-3 text-center">
                    <h3 className="title">
                      <strong>{motivBook.name}</strong>
                    </h3>
                    <span>Category: {motivBook.category} </span>
                    <p> <strong onClick={()=> dispatch(addToCart(motivBook))}  className='add-to-cart'>Get Book <FontAwesomeIcon icon={faArrowCircleRight}/></strong>  </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
};

export default Motivational;