import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


function Points() {
    const [score, setScore] = useState(0);
    const [scoreTwo, setScoreTwo] = useState(0);
    const touchdown = e => {
      setScore(score + 7);
    };
    const fieldGoal = e => {
      setScore(score + 3);
    };
    const touchdownTwo = e => {
      setScoreTwo(scoreTwo + 7);
    };
    const fieldGoalTwo = e => {
      setScoreTwo(scoreTwo + 3);
    };
    return (
      <div>
        <div>
          Team Lions Score: <span>{score}</span>
        </div>
        <button onClick={touchdown}>TouchDown</button>
        <button onClick={fieldGoal}>Field Goal</button>
        <div>
          Team Bears Score: <span>{scoreTwo}</span>
        </div>
        <button onClick={touchdownTwo}>TouchDown</button>
        <button onClick={fieldGoalTwo}>Field Goal</button>
      </div>
    );
  }

ReactDOM.render(<Points />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
