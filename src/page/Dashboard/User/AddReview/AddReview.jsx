import React from 'react';
import { FormLabel } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import SideNav from '../../../../components/Dashboard/SideNav/SideNav';

const Review = () => {
    const loggedInUserInfo = useSelector((state) => state.auths);
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();

      const onSubmit = (data) => {
        console.log(data);
        alert('successfully')
        }
    
        
     //api connect
    return (
        <div className="">
        <div className="d-flex row g-0">
          <div className="col-md-3 bg-dark" style={{ minHeight: "100vh" }}>
            <SideNav active="write-review" navType="user" />
          </div>
     <div className="col-md-7">
     <div className="col-md-12 p-5" >
     <h2 className="text-success text-center">Write a Review</h2>
     <form onSubmit={handleSubmit(onSubmit)}>
               <FormLabel>Your Name:</FormLabel>
                <input
                  className="form-control my-3"
                  defaultValue={loggedInUserInfo.userInfo.name}
                  {...register("author", { required: true })}
                />
                {errors.author && (
                  <small className="text-danger">This field is required</small>
                )} <br/>
                <FormLabel>Write A Review:</FormLabel>
                <input
                  className="form-control my-3 "
                  placeholder="Write a short review"
                  {...register("content", { required: true , maxLength: 260 })}
                />
                {errors.content && (
                  <small className="text-danger"> Write down a review which length maximum 260 characters</small>
                )} <br/>
               <FormLabel>Your Image URL:</FormLabel>
                <input
                  className="form-control my-3"
                  defaultValue={loggedInUserInfo.userInfo.image}
                  {...register("image")}
                />
                {errors.image && (
                  <small className="text-danger">This field is required</small>
                )}
                <br/>
                <input className='btn btn-success' type="submit" value="Submit"/>
        </form>
     </div>
     </div>
 </div>
     </div>
    );
};

export default Review;