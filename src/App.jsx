import React from "react";

const App = () => {
  return (
    <div className="parent-element">
      <div className="flexbox-container">
        <div className="row">
          <div className="content-side"></div>
          <div className="content-middle"></div>
          <div className="content-side"></div>
        </div>
        <div className="row">
          <div className="content_outer_side"></div>
          <div className="content"></div>
          <div className="content_outer_side"></div>
        </div>
        <div className="row">
          <div className="content-side"></div>
          <div className="content-middle"></div>
          <div className="content-side"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
