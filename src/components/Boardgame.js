import React from "react";
import Square from "./Square";

const Boardgame = ({ squares, onClick }) => (
    <div className="boardgame">
        {squares.map((square, i) => (
          <Square key={i} value={square} onClick={() => onClick(i)} />  
        ))}
    </div>
);

export default Boardgame;