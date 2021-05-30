import React from "react";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert2";
import { withSwalInstance } from "sweetalert2-react";
import { hideAlert } from "../../redux/slices/sweetAlertSlice";

const SweetAlert2 = withSwalInstance(swal);

const SweetAlert = () => {
  const { show, title, text, icon } = useSelector((state) => state.sweetAlert);
  const dispatch = useDispatch();
  return (
    <div>
      <SweetAlert2
        show={show}
        title={title}
        text={text}
        icon={icon}
        onConfirm={() => dispatch(hideAlert())}
      />
    </div>
  );
};

export default SweetAlert;
