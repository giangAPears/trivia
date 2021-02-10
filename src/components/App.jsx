import React, { Component, useState } from "react";
import "../css/App.css";
import data from "../sample_data.json";

function App() {

  let [isAnswered, setisAnswered] = useState(false);
  let [questionNum, setquestionNum] = useState(0);
  function showAnswer() {
    setisAnswered(true);
    if (isAnswered === true) {
      setanswerSentence(data[questionNum].question.choices[data[questionNum].question.correct_choice_index]);
    }
  }
  
  let nextQuestionNum=() => 
  {setquestionNum(questionNum + 1)
  setanswerSentence("unanswered")
  setisAnswered(false)    
  }
  let [answerSentence, setanswerSentence] = useState("unanswered");
  /*

*/
  return (
    <div className="app">
      {" "}
      <h1> Trivia </h1>
      <Question
        question={data[questionNum].question.text}
        choices={data[questionNum].question.choices}
      />
      <NextQuestion  renderBtn="Next Question" 
      questionNum = {questionNum}
      setquestionNum = {setquestionNum}
      nextQuestionNum = {nextQuestionNum}
      />
      {
        //questionNum will only be 0 or 1, data.length will always be 2
        //when questionNum is 1, we want the expression below to be false
        //+ be sure to commit!
    //questionNum < data.length  && <Component/>

}
      <button  onClick={showAnswer}>Show Answer</button>
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
  return <button onClick = {props.nextQuestionNum} > {props.renderBtn} </button>;
}

function Answer(props) {
  return <p> {props.answer}</p>;
}

export default App;
