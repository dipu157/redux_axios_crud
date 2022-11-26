import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { updateDepartment } from './DepartmentSlice';

const EditDepartment = () => {

  const {id} = useParams();
 // console.log("Dept ID is :", id);

  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [idd, setId] = useState(location.state.id);
  const [name, setName] = useState(location.state.name);
  const [short_name, setShortName] = useState(location.state.short_name);
  const [description, setDescription] = useState(location.state.description);
  const [user_id, setUserId] = useState(1);


  const handleSubmit = (e) => {
    e.preventDefault();
    const deptDataUpdate = { idd, name, short_name, description, user_id };
    console.warn(id, deptDataUpdate);
    dispatch(updateDepartment(id,deptDataUpdate));
    navigate("/view-departments", { replace: true });
  };


  return (
    <div>
      <h2>Edit Department</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
        <input
            type="hidden"
            value={idd} name="id"
            onChange={(e) => setId(e.target.value)}
          />
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="shortname">Short Name: </label>
          <input
            type="text"
            value={short_name}
            onChange={(e) => setShortName(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit">Update Department</button>
      </form>
    </div>
  )
}

export default EditDepartment
