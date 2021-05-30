import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../../redux/slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.carts.carts);
  return (
    <div style={{ height: "60vh" }} className="container py-5">
      <h2 className="text-center font-monospace">Total Book: {carts.length}</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Category</th>
            <th>Remove From Cart</th>
          </tr>
        </thead>
          {carts.length === 0 && <tbody className='text-center text-danger'><h3>Your need to add some books</h3></tbody>}
          {
            carts.map((book , index)=> (
              <tbody key={index}>
              <tr>
              <td>{book.name}</td>
              <td>{book.author.name}</td>
              <td>{book.category}</td>
              <td className='text-center'><button onClick={() => dispatch(removeCart(book._id))} className='btn btn-danger btn-sm'>Remove</button></td>
             </tr>
             </tbody>
            ))
          }
      </Table>
      <div className="d-flex justify-content-end">
        <button className="btn btn-outline-primary">
          <strong>Confirm Now</strong>
        </button>
      </div>
    </div>
  );
};

export default Cart;
