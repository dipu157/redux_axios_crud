import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createDepartment } from './DepartmentSlice';

const AddDepartment = () => {

  const [name, setName] = useState("");
  const [short_name, setShortName] = useState("");
  const [description, setDescription] = useState("");
  const [user_id, setUserId] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const deptData = { name, short_name, description, user_id };
   // console.warn(department);
    dispatch(createDepartment(deptData));
    navigate("/view-departments", { replace: true });
  };

  return (
    <div>
      <h2>Add Department</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
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
        <button type="submit">Add Department</button>
      </form>
    </div>
  )
}

export default AddDepartment
