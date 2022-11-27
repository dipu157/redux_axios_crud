import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDesig, deleteDesig } from './DesignationSlice';
import { useNavigate, Link } from "react-router-dom";

const ViewDesignation = () => {

 // const {isLoading,values,error} = useSelector((state) => state.departments);
  const designationss = useSelector((state) => state.designations);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initFetch = useCallback(() => {
    dispatch(fetchDesig());
  }, [dispatch]);


  const handleDeleteDesig = (id) => {
    dispatch(deleteDesig(id));
    navigate("/view-designations", { replace: true });
  };

  useEffect(() => {
    initFetch();
  },[initFetch]);

  return (
    <div>
      <h2>List of Designation</h2>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>designation Code</th>
      <th>Name</th>
      <th>Short Name</th>
      <th>Description</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {designationss && designationss.map((data) =>{
      const { id, name, short_name, description } = data;
      return <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.designation_code}</td>
        <td>{data.name}</td>
        <td>{data.short_name}</td>
        <td>{data.description}</td>
        <td>
          <Link to={`/edit-designation/${data.id}`} state={ {id, name, short_name, description} }><button>Edit</button> </Link>
          <button onClick={() => { handleDeleteDesig(data.id); }}> Delete </button>
        </td>
      </tr>
    })}
  </tbody>
</table>
    </div>
  )
}

export default ViewDesignation
