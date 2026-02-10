import React, { useState } from "react";

function App() {
  const [top, setTop] = useState("60%");
  const [left, setLeft] = useState("60%");
  const [isMoved, setIsMoved] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const buttonStyles = isMoved
    ? {
        position: "absolute",
        top: top,
        left: left,
        transition: "all 0.4s ease",
      }
    : {};

  function changeButtonPosition() {
    setIsMoved(true);
    setTop(`${Math.floor(Math.random() * 80)}%`);
    setLeft(`${Math.floor(Math.random() * 80)}%`);
  }

  function handleYesClick() {
    setShowResult(true);
  }

  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      <header className="mt-2 bg-linear-to-r from-purple-400 to-pink-400 text-white text-5xl text-center p-6 font-bold">
        Try to say No 😂
      </header>

      <div className="flex-1 flex flex-col justify-center items-center gap-6 bg-linear-to-r from-[#ff9a9e] to-[#fad0c4]">
        {/* BEFORE CLICK */}
        {!showResult && (
          <>
            <video
              className="w-96 h-64 -mt-24"
              src="Reply me love.mp4"
              autoPlay
              loop
              muted
            />

            <h1 className="text-6xl text-gray-800 font-medium">
              Do you Like me?
            </h1>

            <div className="flex gap-8 m-6">
              <button
                onClick={handleYesClick}
                className="bg-blue-600 rounded-2xl w-20 text-2xl text-white p-3"
              >
                Yes
              </button>

              <button
                style={buttonStyles}
                onMouseOver={changeButtonPosition}
                className="bg-blue-600 rounded-2xl w-20 text-2xl text-white p-3"
              >
                No
              </button>
            </div>
          </>
        )}

        {/* AFTER CLICK */}
        {showResult && (
          <div className="flex flex-col items-center gap-6">
            <img
              src="hearthappy.gif"
              alt="love"
              className="w-72 h-72"
            />

            <p className="text-6xl font-bold text-green-600 text-center">
              I knew it! Best decision ever 😄💖
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
