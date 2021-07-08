import React from 'react';
import Lottie from "react-lottie";
import animationData from "./animation/data";

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="App">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export default App;
