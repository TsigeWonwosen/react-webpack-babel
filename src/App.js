import React, { useState } from "react";
import NavBar from "./components/NavBar";

const App = () => {
  const [show, setShow] = useState(false);
  const showText = () => {
    setShow(!show);
  };
  return (
    <>
      <NavBar />
      <div className='container'>
        <h1>Hello React - Webpack</h1>
        <button className='btnShow' onClick={showText}>
          {!show ? "Show Text" : "Hide Text"}
        </button>
        {show && (
          <p className='showParagraph'>
            React configuration - with Out create-react-app.
          </p>
        )}
      </div>
    </>
  );
};

export default App;
