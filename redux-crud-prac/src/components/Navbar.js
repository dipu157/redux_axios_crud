import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/" className="nav-link"> Home </Link>
      <Link to="/view-departments" className="nav-link"> Show Department</Link>
      <Link to="/add-department" className="nav-link"> Add Department </Link>

      {/* <Link to="/view-durations" className="nav-link"> Show Duration</Link>
      <Link to="/add-duration" className="nav-link"> Add Duration </Link> */}
    </nav>
  );
};

export default Navbar;
