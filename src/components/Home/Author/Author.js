import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthors } from "../../../redux/slices/aothorSlice";
import "./Author.css";

const Author = () => {
  // const [author, setAuthor] = useState([]);
  const dispatch = useDispatch();
  const authors = useSelector((state) => state.authors.authors.slice(0, 4));
  useEffect(() => {
    const uri = `https://shrouded-crag-01009.herokuapp.com/bookAuthor`;
    axios
      .get(uri)
      .then(function (response) {
        dispatch(setAuthors(response.data.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [dispatch]);
  return (
    <div className="container">
      <h2 className="text-center">Top Rated Author</h2>
      <div className="row">
        {authors.map((singleAuthor, index) => (
          <div key={index} className="col-md-3 col-sm-6">
            <div className="serviceBox">
              <div className="service-image">
                <a href="/#">
                  <img src={singleAuthor.image} alt="" />
                </a>
              </div>
              <div className="service-content">
                <h3>{singleAuthor.name}</h3>
                <small>{singleAuthor.bio}</small>
              </div>
              <div className="read">
                <a href="/#">learn more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Author;
