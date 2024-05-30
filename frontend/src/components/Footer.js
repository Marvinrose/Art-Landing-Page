import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center pb-3" style={{ fontSize: "14px" }}>
      Built with ❤️ by{" "}
      <Link
        target="_blank"
        style={{ textDecoration: "none", color: "var(--secondary-color)" }}
        to="https://react-portfolio-delta-nine.vercel.app/"
      >
        Marvinrose
      </Link>
    </div>
  );
};

export default Footer;
