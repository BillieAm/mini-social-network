import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="border-top text-center small text-muted py-3">
      <p>
        <Link to="/" className="mx-1">
          Home
        </Link>
        <Link className="mx-1" to="/about">
          About Us
        </Link>
        <Link className="mx-1" to="/terms">
          Terms
        </Link>
      </p>
      <p className="m-0">
        <a href="/" className="text-muted">
          Social Net
        </a>
        <span> &copy; {new Date().getFullYear()}</span>
      </p>
    </footer>
  );
}

export default Footer;
