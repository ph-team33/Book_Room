import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
const AllBooks = () => {

    //add to cart 
    const dispatch = useDispatch()

  //api calling
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const uri = `https://shrouded-crag-01009.herokuapp.com/book`;
    axios
      .get(uri)
      .then(function (response) {
        setBooks(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  
 
  // console.log(cart[0]?.author.name);
  return (
    <div className="container py-5">
      <div className="row">
        <h2 className='text-center font-monospace py-3' > All Book Collection </h2>
        {books.map((book, index) => (
          <div key={index} className="col-md-3 col-sm-6">
            <div className="product-grid cardDesign my-1">
              <div className="product-image">
                  <img className="pic-1" alt="" src={book.image} />
                  <img className="pic-2" alt="" src={book.image} />
              </div>
              <div className="product-content pt-3 text-center">
                <h3 className="title">
                  <strong>{book.name}</strong>
                </h3>
                <span>Category: {book.category} </span>
                <p> <strong onClick={()=> dispatch(addToCart(book))} className='add-to-cart'>Get Book <FontAwesomeIcon icon={faArrowCircleRight}/></strong>  </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooks;
