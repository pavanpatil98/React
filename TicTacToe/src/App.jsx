import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BoardContainer from "./component/BoardContainer";
import "./component/Button.css"
function App() {
  return (
    <>
      <p >Tic. Tac.. Toe...</p>
      <div className="container">
        <div className="game">
          <BoardContainer />
        </div>
      </div>
    </>
  );
}

export default App;
