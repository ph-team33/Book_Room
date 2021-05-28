import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Author.css'

const Author = () => {
    const [author, setAuthor] = useState([])
    useEffect(()=> {
        const uri = `https://shrouded-crag-01009.herokuapp.com/bookAuthor`;
        axios
            .get(uri)
            .then(function (response) {
                setAuthor(response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    },[])
    console.log(author);
    return (
        <div className="container">
            <h2 className='text-center'>Top Rated Author</h2>
        <div className="row">
            {
                author.map((singleAuthor , index) => (
                    <div key={index} className="col-md-3 col-sm-6">
                    <div className="serviceBox">
                        <div className="service-image">
                            <a href="/#">
                                <img src={singleAuthor.image} alt=""/>
                            </a>
                        </div>
                        <div className="service-content">
                            <h3>{singleAuthor.name}</h3>
                            <small>
                            {
                                singleAuthor.bio
                            }
                            </small>
                        </div>
                        <div className="read">
                            <a href="/#">learn more</a>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
    );
};

export default Author;