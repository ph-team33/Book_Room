import axios from 'axios';
import React, { useEffect, useState } from 'react';

const OrderedBook = () => {
    const [orderedBooks, setOrderedBooks] = useState([])
   // const {rating, id, name, image, category, description, author} = orderedBooks.book

    useEffect(()=>{
        axios.get(`https://shrouded-crag-01009.herokuapp.com/bookTransaction`)
        .then(res => setOrderedBooks(res.data.data))
        .catch(err => console.log(err))
    },)
    return (
        <>
             <table className="table">
                <thead>
                    <tr>
                    <td>User Name</td>
                    <td>User Image</td>
                    <td>Rating</td>
                    <td>Book Name</td>
                    <td>Book Image</td>
                    <td>Category</td>
                    <td className="text-center">Status</td>
                    </tr>
                </thead>
                <tbody>
                {
                    orderedBooks.map(odrBook=>(
                        <tr key={odrBook._id}>
                            <td>{odrBook.name}</td>
                            <td><img src={odrBook.image} alt="" /></td>
                            <td>{odrBook.book.rating}</td>
                            <td>{odrBook.book.name}</td>
                            <td><img style={{height:"150px", width:"150px" }} src={odrBook.book.image} alt="" /></td>
                            <td>{odrBook.book.category}</td>
                            <td>{odrBook.status}</td>
                        </tr>
                    ))
                }
                </tbody>
                </table>
        </>
    );
};

export default OrderedBook;