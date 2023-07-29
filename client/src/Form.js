import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// This code was written with the assistance of OpenAI's GPT.

const Form = (props) => {
  const [number, setNumber] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/fibonacci/",
        { number: number }
      );

      props.onResult(response.data.fibonacci_sequence);
      navigate("/result");
    } catch (error) {
      console.error("Error in fetching the response from backend!", error);
    }
  };

  return (
    <div>
      <h1>Fibonacci Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
