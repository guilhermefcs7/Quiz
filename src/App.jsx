import "./App.css";

import React from "react";

import Welcome from "./components/Welcome";

import { useContext } from "react";

import { QuizContext } from "../src/context/quiz";

import Question from "./components/Question";
import GameOver from "./components/GameOver";

function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  React.useEffect(() => {
    dispatch({ type: "REORDER_QUESTIONS" });
  }, []);

  return (
    <div className="App">
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Question />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
