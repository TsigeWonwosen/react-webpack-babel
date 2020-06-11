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
          <a
            href='https://github.com/TsigeWonwosen/react-webpack-babel'
            target='_blank'
          >
            Github
          </a>
          <a href='#'>LinkedIn</a>
          <a href='#'>You Tube</a>
          <a href='https://twitter.com/abel_negn' target='_blank'>
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
