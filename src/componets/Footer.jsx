import React from "react";
import "./styles.css";

function Footer() {
  const getdate = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright © {getdate} </p>
    </footer>
  );
}

export default Footer;
