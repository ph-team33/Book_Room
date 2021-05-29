import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
const AllUser = () => {
   const [users, setUsers] = useState([])
    const [role, setRole] = useState('')
    const [id, setId] = useState('')
  
    useEffect(()=> {
        getData()
    },[])
    
    function getData(){
        axios.get(`https://shrouded-crag-01009.herokuapp.com/user`)
        .then( res=> setUsers(res.data.data))
        .catch(err => {
            console.log(err);
        })
    }
   
    function saveUserRole(id) {
        axios.put(`https://shrouded-crag-01009.herokuapp.com/user/${id}`,{role})
        .then(res => {
            console.log(res)
        })
        .catch(err => console.log(err))
    }
    function changeRoleHandle(e){
        setRole(e.target.value)
    }

    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                    <td>Role</td>
                    <td>Name</td>
                    <td>Image</td>
                    <td className="text-center">Action</td>
                    </tr>
                </thead>
                
                <tbody>
                    {
                         users.map( user => (
                            <tr key={user._id}>
                                <td>{user.role}</td>
                                <td>{user.name}</td>
                                <td><img className="img-fluid" src={user.image} alt="" /></td>
                                <td>
                                    <button className="btn btn-success mr-2" onClick={()=>setId(user._id)} data-toggle="modal" data-target="#exampleModal">Change Role</button>
                                    <button className="btn btn-danger">Delete</button>
                                </td>
                            </tr>
                        ))
                    
                    }
                </tbody>
            </table>

<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Choose Role</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
          <form action="">
          <label htmlFor="exampleFormControlSelect1">Example select</label>
    <select className="form-control" onChange={(e) =>changeRoleHandle(e)} id="exampleFormControlSelect1">
      <option defaultValue>Choose Role</option>
      <option defaultValue="Admin">Admin</option>
      <option defaultValue="Free Member">Free Member</option>
      <option defaultValue ="Premium Member">Premium Member</option>
      <option defaultValue ="Vip Member">Vip Member</option>
    </select>
          </form>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>saveUserRole(id)}>Save changes</button>
      </div>
    </div>
  </div>
</div>

        </>
    );
};

export default AllUser;

