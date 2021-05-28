import { faStar } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const BooksWeLove = () => {
    return (
        <div className="container py-4">
           
        <div className="row">
        <h2>Book We Love</h2>
            <div className="col-md-3 col-sm-6 card-design">
                <div className="product-grid">
                    <div className="product-image">
                        <a href="/" className="image">
                            <img className="pic-1" alt='' src="https://covers.openlibrary.org/w/id/10703361-M.jpg"/>
                            <img className="pic-2" alt='' src="https://covers.openlibrary.org/w/id/10703361-M.jpg"/>
                        </a>
                    </div>
                    <div className="product-content text-center">
                        <ul className="rating">
                           <FontAwesomeIcon icon={faStar}/>
                           <FontAwesomeIcon icon={faStar}/>
                           <FontAwesomeIcon icon={faStar}/>
                           <FontAwesomeIcon icon={faStar}/>
                           <FontAwesomeIcon icon={faStar}/>
                        </ul>
                        <h3 className="title"><a href="/">Hungry Monster</a></h3>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 card-design">
                <div className="product-grid">
                    <div className="product-image">
                        <a href="/" className="image">
                        <img className="pic-1" alt='' src="https://covers.openlibrary.org/w/id/10703361-M.jpg"/>
                            <img className="pic-2" alt='' src="https://covers.openlibrary.org/w/id/10703361-M.jpg"/>
                        </a>
                    </div>
                    <div className="product-content text-center">
                        <ul className="rating">
                           <FontAwesomeIcon icon={faStar}/>
                           <FontAwesomeIcon icon={faStar}/>
                           <FontAwesomeIcon icon={faStar}/>
                           <FontAwesomeIcon icon={faStar}/>
                           <FontAwesomeIcon icon={faStar}/>
                        </ul>
                        <h3 className="title"><a href="/">Women's Top</a></h3>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 card-design">
                <div className="product-grid">
                    <div className="product-image">
                        <a href="/" className="image">
                        <img className="pic-1" alt='' src="https://covers.openlibrary.org/w/id/10703361-M.jpg"/>
                            <img className="pic-2" alt='' src="https://covers.openlibrary.org/w/id/10703361-M.jpg"/>
                        </a>
                    </div>
                    <div className="product-content text-center">
                        <ul className="rating">
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        <FontAwesomeIcon icon={faStar}/>
                        </ul>
                        <h3 className="title"><a href="/">Women's Top</a></h3>
                    </div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6 card-design">
                <div className="product-grid">
                    <div className="product-image">
                        <a href="/" className="image">
                        <img className="pic-1" alt='' src="https://covers.openlibrary.org/w/id/10703361-M.jpg"/>
                            <img className="pic-2" alt='' src="https://covers.openlibrary.org/w/id/10703361-M.jpg"/>
                         </a>
                    </div>
                    <div className="product-content text-center">
                        <ul className="rating">
                           <FontAwesomeIcon icon={faStar}/>
                           <FontAwesomeIcon icon={faStar}/>
                           <FontAwesomeIcon icon={faStar}/>
                           <FontAwesomeIcon icon={faStar}/>
                           <FontAwesomeIcon icon={faStar}/>
                        </ul>
                        <h3 className="title"><a href="/">Women's Top</a></h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default BooksWeLove;