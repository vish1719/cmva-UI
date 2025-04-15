import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-container" style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "48px", color: "#333", marginBottom: "20px" }}>404</h1>
      <p style={{ fontSize: "20px", color: "#666", marginBottom: "30px" }}>
        Sorry, the page you are looking for does not exist.
      </p>

      <div className="quote-grp" style={{ marginBottom: "20px" }}>
        <Link to="/" className="quote" style={{
          display: "inline-block",
          background: "#007bff",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: "6px",
          textDecoration: "none",
          fontSize: "16px"
        }}>
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="quote-grp">
        <Link to="/quote" className="quote" style={{
          display: "inline-block",
          background: "#28a745",
          color: "#fff",
          padding: "12px 24px",
          borderRadius: "6px",
          textDecoration: "none",
          fontSize: "16px"
        }}>
          <span>Get a Free Quote</span>
        </Link>
      </div>

      {/* Optional: Add a sad face icon or animation */}
      <div style={{ marginTop: "40px", fontSize: "50px", color: "#bbb" }}>
        <i className="icofont-sad"></i>
      </div>
    </div>
  );
};

export default NotFound;
