import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDept, deleteDept } from './DepartmentSlice';
import { useNavigate, Link } from "react-router-dom";

const ViewDepartment = () => {

 // const {isLoading,values,error} = useSelector((state) => state.departments);
  const departmentss = useSelector((state) => state.departments);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initFetch = useCallback(() => {
    dispatch(fetchDept());
  }, [dispatch]);


  const handleDeleteDept = (id) => {
    dispatch(deleteDept(id));
    navigate("/view-departments", { replace: true });
  };

  useEffect(() => {
    initFetch();
  },[initFetch]);

  return (
    <div>
      <h2>List of Departments</h2>

<table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Department Code</th>
      <th>Name</th>
      <th>Short Name</th>
      <th>Description</th>
      <th>Action</th>
    </tr>
  </thead>

  <tbody>
    {departmentss && departmentss.map((data) =>{
      const { id, name, short_name, description } = data;
      return <tr key={data.id}>
        <td>{data.id}</td>
        <td>{data.department_code}</td>
        <td>{data.name}</td>
        <td>{data.short_name}</td>
        <td>{data.description}</td>
        <td>
          <Link to={`/edit-department/${data.id}`} state={ {id, name, short_name, description} }><button>Edit</button> </Link>
          <button onClick={() => { handleDeleteDept(data.id); }}> Delete </button>
        </td>
      </tr>
    })}
  </tbody>
</table>
    </div>
  )
}

export default ViewDepartment
