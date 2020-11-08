import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import data from '../data.json'

const letters = ["A", "B", "C", "D", "E", "F", "G"];

const Game = () => {
    const [prize, setPrize] = useState(0)
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
    const history = useHistory();

    const selectedLevel= data.filter((elem, index)=> index===questionIndex)
    console.log(typeof selectedLevel)

    const getResult = ((elem, index) =>{
        setSelectedAnswerIndex(index)
        setTimeout(() => {
            setSelectedAnswerIndex(null)
            if(elem.correct_answer === index){
                if (data.length - 1 === questionIndex) {
                    history.push('/gameOver', {sum: elem.prize});
                }
                const num = questionIndex + 1
                setQuestionIndex(num)
                setPrize(elem.prize)
            } else {
                history.push('/gameOver', {sum: prize});
            }
        }, 1000)
    })

    const getBorderColor = (index, correct_answer) => {
        if (selectedAnswerIndex === index) {
            return correct_answer === index ? 'correctAnswer' : 'wrongAnswer'
        }
        if (selectedAnswerIndex !== null && correct_answer === index) {
            return 'correctAnswer'
        }
        return ''
    }

    return(
        <div className="container2">
            <div>
                {selectedLevel.map((elem) =>{
                   return  (
                    <div>
                        <div>
                            <p  className="question">{elem.question}</p>
                        </div>
                        <div className="answerOptionsContainer">
                            {elem.answers.map((answer, index) => (
                                <div onClick={() => getResult(elem, index)}>
                                    <p className={`answerOptions blackText ${getBorderColor(index, elem.correct_answer)}`}>
                                        <span className="value">{letters[index]}</span>
                                        {answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                   )
                })}
            </div>

            <div className="prizeTable">
                {data.map(({prize}, index)=><div key={index} className = {index === questionIndex ? "activeScore" : "score"}>
                   <p className="blackText">{prize}</p></div>)}
            </div>

        </div>
    )
}

export default Game;