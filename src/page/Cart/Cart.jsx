import React from "react";
import { Table } from "react-bootstrap";

const Cart = () => {
  return (
    <div style={{ height: "60vh" }} className="container py-5">
      <h2 className="text-center font-monospace">Cart Details</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <td>Larry the Bird</td>
            <td>Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
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
