import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SideNav from "../../../../components/Dashboard/SideNav/SideNav";
import { setUsers } from "../../../../redux/slices/dashboardSlice";
import { showAlert } from "../../../../redux/slices/sweetAlertSlice";

const ManageUser = () => {
  const users = useSelector((state) => state.dashboards.users);
  const dispatch = useDispatch();
  useEffect(() => {
    const uri = `https://shrouded-crag-01009.herokuapp.com/user/`;
    axios
      .get(uri)
      .then((response) => {
        dispatch(setUsers(response.data.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);

  const deleteUser = (id) => {
    const uri = `https://shrouded-crag-01009.herokuapp.com/user/${id}`;
    axios
      .delete(uri)
      .then((response) => {
        dispatch(setUsers(users.filter((user) => user._id !== id)));
        dispatch(
          showAlert({
            text: "User deleted successfully",
            title: "Done",
            icon: "success",
          })
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
          <SideNav active="manageUser" navType="admin" />
        </div>
        <div className="col-md-9">
          <div className="col-md-12 p-5">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Image</th>
                  <th width="30%" scope="col">
                    Name
                  </th>
                  <th width="30%" scope="col">
                    Email
                  </th>
                  <th scope="col">Role</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => (
                  <tr key={i}>
                    <td>
                      <img
                        style={{ width: "70px", height: "70px" }}
                        className="rounded-circle"
                        src={user.image}
                        alt="package"
                      />
                    </td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <span
                        className={
                          user.role === "Admin"
                            ? "badge bg-danger"
                            : "badge bg-primary"
                        }
                      >
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <button className="btn btn-primary btn-sm mx-1">
                        <i className="fa fa-edit"></i>
                      </button>
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="btn btn-danger btn-sm mx-1"
                      >
                        <i className="fa fa-trash"></i>
                      </button>
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

export default ManageUser;
