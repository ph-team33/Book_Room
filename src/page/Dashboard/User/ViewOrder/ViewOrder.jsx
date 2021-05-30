import React from "react";
import SideNav from "../../../../components/Dashboard/SideNav/SideNav";

const ViewOrder = () => {
  return (
    <div className="">
      <div className="d-flex row g-0">
        <div className="col-md-3 bg-dark" style={{ minHeight: "100vh" }}>
          <SideNav active="manageUser" navType="user" />
        </div>
        <div className="col-md-9">
          <div className="col-md-12 p-5"></div>
        </div>
      </div>
    </div>
  );
};

export default ViewOrder;
