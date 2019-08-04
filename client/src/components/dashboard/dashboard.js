import React from "react";
import { Link } from "react-router-dom";

import "./dashboard.css";

function Dashboard(props) {
  return (
    <div className="container mt-3 mb-2">
      <h4 className="mb-3">Dashboard:</h4>
      <Link to={`/youtube`} style={{ textDecoration: "none", color: "#333" }}>
        <div className="card mt-2">
          <div className="card-body">
            <p className="card-title">Youtube Integration</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Dashboard;
