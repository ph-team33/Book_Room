import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import SideNav from '../../../../components/Dashboard/SideNav/SideNav';
import './Order.css'
const Order = () => {
    const order = useSelector((state) => state.order.order)
    const orderList= order[0] || [];
    console.log(orderList);
    return (
        <div className="">
      <div className="d-flex row g-0">
        <div className="col-md-3 bg-dark" style={{ minHeight: "100vh" }}>
          <SideNav active="My Order" navType="user" />
        </div>
          <div className="col-md-9">
            <div className="col-md-12 p-5">
            <Table striped bordered hover>
        <thead>
          <tr>
            <th>Book Name</th>
            <th>Author</th>
            <th>Category</th>
            <th>Date</th>
          </tr>
        </thead> 
        {
            (orderList === []) ? null
            :  orderList.map((book , index)=> (
                <tbody key={index}>
                <tr>
                <td>{book.name}</td>
                <td>{book.author.name}</td>
                <td>{book.category}</td>
                <td>{new Date().toLocaleDateString()}</td>
               </tr>
               </tbody>
              )) 
        }
      </Table>
            </div>
          </div>
        </div>
      </div>
    );;
};

export default Order;