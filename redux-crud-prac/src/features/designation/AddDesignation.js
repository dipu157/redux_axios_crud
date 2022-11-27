import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createDesignation } from './DesignationSlice';

const AddDesignation = () => {

  const [name, setName] = useState("");
  const [short_name, setShortName] = useState("");
  const [description, setDescription] = useState("");
  const [user_id, setUserId] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const desigData = { name, short_name, description, user_id };
   // console.warn(department);
    dispatch(createDesignation(desigData));
    navigate("/view-designations", { replace: true });
  };

  return (
    <div>
      <h2>Add Designation</h2>
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
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddDesignation
