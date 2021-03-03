import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {
  let [isAnswered, setisAnswered] = useState(false);
  let [questionNum, setquestionNum] = useState(0);
  function showAnswer() {
    setisAnswered(true);
    setanswerSentence(
      data[questionNum].question.choices[
        data[questionNum].question.correct_choice_index
      ]
    );
  }

  let nextQuestionNum = () => {
    setquestionNum(questionNum + 1);
    setanswerSentence("unanswered");
    setisAnswered(false);
  };
  let [answerSentence, setanswerSentence] = useState("unanswered");

  function handleChoice(event) {
    var valChoice = event.target.value
    console.log(valChoice);
  };

  return (
    <div className="app">
      {" "}
      <h1> Trivia </h1>
      <Question
        question={data[questionNum].question.text}
        choices={data[questionNum].question.choices}
        handleChoice = {handleChoice}
      />
      {questionNum < data.length - 1 && (
        <NextQuestion
          renderBtn="Next Question"
          questionNum={questionNum}
          setquestionNum={setquestionNum}
          nextQuestionNum={nextQuestionNum}
        />
      )}
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
        return <Answer handleChoice = {props.handleChoice}  answer={x} />;
      })}
    </div>
  );
}

function NextQuestion(props) {
  return <button onClick={props.nextQuestionNum}> {props.renderBtn} </button>;
}

function Answer(props) {
return <button onClick= {props.handleChoice} value={props.answer}> {props.answer} </button>;
}

export default App;
