import React from "react";

function Footer() {
  return (
    <footer className="border-top text-center small text-muted py-3">
      <p>
        <a href="/" className="mx-1">
          Home
        </a>
        <a className="mx-1" href="/about-us">
          About Us
        </a>
        <a className="mx-1" href="/terms">
          Terms
        </a>
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
