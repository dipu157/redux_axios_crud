import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home"
import AddDepartment from "../features/department/AddDepartment"
import ViewDepartment from "../features/department/ViewDepartment"
import EditDepartment from "../features/department/EditDepartment"
import AddDesignation from "../features/designation/AddDesignation"
import ViewDesignation from "../features/designation/ViewDesignation"
import EditDesignation from "../features/designation/EditDesignation"


const Rout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-department" element={<AddDepartment />} />
          <Route path="/view-departments" element={<ViewDepartment />} />
          <Route path="/edit-department/:id" element={<EditDepartment />} />

          <Route path="/add-designation" element={<AddDesignation />} />
          <Route path="/view-designations" element={<ViewDesignation />} />    
          <Route path="/edit-designation/:id" element={<EditDesignation />} />      
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default Rout;
