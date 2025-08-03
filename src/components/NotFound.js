import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  // ✅ Load ProProfs Chat Script on Component Mount
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.text = `
      (function(){
        var pp=document.createElement('script'), ppr=document.getElementsByTagName('script')[0];
        stid='ZGxkaHFDZ3h2RzJOWHdVYWd0Q2F6UT09';
        pp.type='text/javascript';
        pp.async=true;
        pp.src=('https:' == document.location.protocol ? 'https://' : 'http://') + 
               's01.live2support.com/dashboardv2/chatwindow/';
        ppr.parentNode.insertBefore(pp, ppr);
      })();
    `;
    document.body.appendChild(script);
  }, []);

  // ✅ Render UI
  return (
    <div className="not-found-container" style={{ padding: "60px 20px", textAlign: "center" }}>
      <h1 style={{ fontSize: "48px", color: "#333", marginBottom: "20px" }}>404</h1>
      <p style={{ fontSize: "20px", color: "#666", marginBottom: "30px" }}>
        Sorry, the page you are looking for does not exist.
      </p>

      <div className="quote-grp" style={{ marginBottom: "20px" }}>
        <Link
          to="/"
          className="quote"
          style={{
            display: "inline-block",
            background: "#007bff",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          <span>Back to Home</span>
        </Link>
      </div>

      <div className="quote-grp" style={{ marginBottom: "20px" }}>
        <Link
          to="/quote"
          className="quote"
          style={{
            display: "inline-block",
            background: "#28a745",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "6px",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          <span>Get a Free Quote</span>
        </Link>
      </div>

      {/* ✅ Chat Button */}
      <div className="quote-grp">
        <button
          onClick={() => {
            // ProProfs automatically handles online/offline
            // No need to write custom LH_API.startChat()
          }}
          style={{
            display: "inline-block",
            background: "#17a2b8",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "6px",
            border: "none",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          💬 Chat with Us
        </button>
      </div>

      <div style={{ marginTop: "40px", fontSize: "50px", color: "#bbb" }}>
        <i className="icofont-sad"></i>
      </div>
    </div>
  );
};

export default NotFound;
