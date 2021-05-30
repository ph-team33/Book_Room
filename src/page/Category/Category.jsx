import { faBookMedical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Category.css";

const Category = () => {
  const [bookCategory, setBookCategory] = useState([]);
  useEffect(() => {
    const uri = `https://shrouded-crag-01009.herokuapp.com/book`;
    axios
      .get(uri)
      .then(function (response) {
        let newCategory = []
        response.data.data.forEach(item => {
           if (newCategory.indexOf(item.category) === -1) {
            newCategory.push(item.category)
           } 
        })
        setBookCategory(newCategory);
        console.log(newCategory);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
            <h1 className="text-center font-monospace py-4 text-info"> Category of Book</h1>
         
          {bookCategory.map((book, index) => (
            <div className="col-md-4 my-2 col-sm-6 category-card">
              <div className="categoryServiceBox g-2">
                 <FontAwesomeIcon className='h1' icon={faBookMedical}/>
                <h3 className="title">{book}</h3>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod pharetra arcu, quis tincidunt dolor euismod in. Ut
                  pellentesque a.
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Category;
