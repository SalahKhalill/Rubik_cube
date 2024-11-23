import React from "react";
import "./RubikCubeLoader.css";

const RubikCube = () => {
  const renderSquares = (face) =>
    Array.from({ length: 9 }).map((_, i) => (
      <div key={i} className={`square ${face}-square`}></div>
    ));

  return (
    <div className="body">
      <div className="scene">
        <div className="cube">
          <div className="face front">{renderSquares("front")}</div>
          <div className="face back">{renderSquares("back")}</div>
          <div className="face right">{renderSquares("right")}</div>
          <div className="face left">{renderSquares("left")}</div>
          <div className="face top">{renderSquares("top")}</div>
          <div className="face bottom">{renderSquares("bottom")}</div>
        </div>
      </div>
    </div>
  );
};

export default RubikCube;
