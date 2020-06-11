import React from "react";
import "../style/footer.scss";

export default function Footer() {
  return (
    <footer>
      <h3>contact me</h3>
      <div className='footer-adress'>
        <div>
          <h5>Address:</h5>
        </div>
        <div className='social-link'>
          <a href='#'>Github</a>
          <a href='#'>LinkedIn</a>
          <a href='#'>You Tube</a>
          <a href='#'>Twitter</a>
        </div>
      </div>
    </footer>
  );
}
