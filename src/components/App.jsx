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
  var userCorrect = (isCorrect === true) ? "Correct" : "False";
  

  function handleChoice(event) {
    var userChoice = event.target.value
    setIsCorrect(userChoice === question.choices[question.correct_choice_index])
    return userChoice;
  };
  let [isCorrect, setIsCorrect] = useState(false)
  console.log(isCorrect)

  var question = data[questionNum].question

  return (
    <div className="app">
      {" "}
      <h1> Trivia </h1>
      <Question
        question={question.text}
        choices={question.choices}
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
      <p> Your answer is {userCorrect} </p>
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
