import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let questionNum = 0;

  let [isAnswered, setisAnswered] = useState(false);

  function showAnswer() {
    setisAnswered(true);
  }

  let [answerSentence, setanswerSentence] = useState("unanswered");
  /*
{
isAnswered && <Component/>
}
*/
  if (isAnswered === true) {
    setanswerSentence(data[0].question.choices[3]);
  }
  return (
    <div className="app">
      {" "}
      <h1> Trivia </h1>
      <Question
        question={data[0].question.text}
        choices={data[0].question.choices}
      />
      <NextQuestion renderBtn="Next Question" />
      <button onClick={showAnswer}>Show Answer</button>
      <p>The correct answer is {answerSentence}</p>
    </div>
  );
}

function Question(props) {
  return (
    <div className="questionPadding">
      {props.question}
      {props.choices.map((x) => {
        return <Answer answer={x} />;
      })}
    </div>
  );
}

function NextQuestion(props) {
  return <button> {props.renderBtn} </button>;
}

function Answer(props) {
  return <p> {props.answer}</p>;
}

export default App;
