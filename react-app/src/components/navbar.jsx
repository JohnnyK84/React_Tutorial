import React from "react";

//stateless functional component
const NavBar = ({ totalCounters }) => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <h3>
        Total Count Of Items:{" "}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </h3>
    </nav>
  );
};

export default NavBar;
