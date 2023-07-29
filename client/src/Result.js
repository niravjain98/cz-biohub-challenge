import React from "react";
import { useNavigate } from "react-router-dom";

const Result = ({ fibonacci_sequence }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Fibonacci Sequence</h1>
      <p>{fibonacci_sequence}</p>
      <button onClick={handleClick}>back</button>
    </div>
  );
};

export default Result;
