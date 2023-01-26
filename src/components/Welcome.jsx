import React from "react";

import "./Welcome.css";

import { useContext } from "react";

import { QuizContext } from "../context/quiz";

import Quiz from "../images/quiz.svg";

const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="welcome">
      <div>Seja bem-vindo</div>
      <p>Clique no botão abaixo para começar:</p>
      <button onClick={() => dispatch({ type: "CHANGE_STATE" })}>
        Iniciar
      </button>
      <img src={Quiz} alt="Início do Quiz" />
    </div>
  );
};

export default Welcome;
