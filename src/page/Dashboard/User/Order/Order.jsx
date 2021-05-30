import axios from "axios";
import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SideNav from "../../../../components/Dashboard/SideNav/SideNav";
import { allOrder } from "../../../../redux/slices/orderSlice";
import "./Order.css";
const Order = () => {
  const orders = useSelector((state) => state.orders.orders);
  const { email } = useSelector((state) => state.auths.userInfo);
  const dispatch = useDispatch();
  useEffect(() => {
    const uri = `https://shrouded-crag-01009.herokuapp.com/bookTransaction?email=${email}`;
    axios
      .get(uri)
      .then((response) => {
        dispatch(allOrder(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch, email]);

  console.log(orders);

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
                  <th>Email</th>
                  <th>Category</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              {orders.map((order, index) => (
                <tbody key={index}>
                  <tr>
                    <td>{order.book.name}</td>
                    <td>{order.email}</td>
                    <td>{order.book.category}</td>
                    <td>{new Date(order.date).toLocaleDateString()}</td>
                    <td>
                      <span className="badge bg-primary">{order.status}</span>
                    </td>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
