import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="text-center " style={{ fontSize: "16px" }}>
      Built with ❤️ by{" "}
      <Link
        style={{ textDecoration: "none" }}
        to="https://react-portfolio-delta-nine.vercel.app/"
      >
        Marvinrose
      </Link>
    </div>
  );
};

export default Footer;
