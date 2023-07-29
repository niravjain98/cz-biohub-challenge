import React, { useState } from "react";
import Form from "./Form";
import Result from "./Result";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const App = () => {
  const [result, setResult] = useState(null);

  const handleResult = (result) => {
    setResult(result);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form onResult={handleResult} />} />
        <Route
          path="/result"
          element={result && <Result fibonacci_sequence={result} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
