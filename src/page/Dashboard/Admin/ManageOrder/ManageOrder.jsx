import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideNav from "../../../../components/Dashboard/SideNav/SideNav";
import { allOrder } from "../../../../redux/slices/orderSlice";
import { showAlert } from "../../../../redux/slices/sweetAlertSlice";

const ManageOrder = () => {
  const orders = useSelector((state) => state.orders.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    const uri = `https://shrouded-crag-01009.herokuapp.com/bookTransaction`;
    axios
      .get(uri)
      .then((response) => {
        dispatch(allOrder(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  const updateStatus = (e, id) => {
    //  alert(e.target.value);
    const status = { status: e.target.value };
    const uri = `https://shrouded-crag-01009.herokuapp.com/bookTransaction/${id}`;
    axios
      .put(uri, status)
      .then((response) => {
        dispatch(
          showAlert({ text: "Status updated successfully", title: "Success" })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="">
      <div className="d-flex row g-0">
        <div className="col-md-3 bg-dark" style={{ minHeight: "100vh" }}>
          <SideNav active="manageOrder" navType="admin" />
        </div>
        <div className="col-md-9">
          <div className="col-md-12 p-5">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Book</th>
                  <th width="30%" scope="col">
                    Book Name
                  </th>
                  <th scope="col">Name</th>
                  <th scope="col">email</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order, i) => (
                  <tr key={i}>
                    <td>
                      <img
                        style={{ width: "50px" }}
                        src={order.book.image}
                        alt=""
                      />{" "}
                    </td>
                    <td>{order.book.name}</td>
                    <td>{order.name}</td>
                    <td>{order.email}</td>
                    <td>
                      <select
                        className="form-select"
                        aria-label="Default select example"
                        onChange={(e) => updateStatus(e, order._id)}
                        name="status"
                      >
                        <option
                          selected={order.status === "Pending"}
                          value={"Pending"}
                        >
                          Pending
                        </option>
                        <option
                          selected={order.status === "Approved"}
                          value={"Approved"}
                        >
                          Approved
                        </option>
                        <option
                          selected={order.status === "Returned"}
                          value={"Returned"}
                        >
                          Returned
                        </option>
                        <option
                          selected={order.status === "Received"}
                          value={"Received"}
                        >
                          Received
                        </option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
