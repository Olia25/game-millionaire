import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import data from '../data.json'

const letters = ["A", "B", "C", "D", "E", "F", "G"];
console.log(data)

const Game = () => {
    const [prize, setPrize] = useState("0")
    const [questionIndex, setQuestionIndex] = useState(0);
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);

    console.log("selectedAnswerIndex", selectedAnswerIndex)
    const history = useHistory();


    const selectedLevel= data.find((elem, index)=> index===questionIndex)

    // const getResult = ((elem, index) =>{
    //     setSelectedAnswerIndex(index)
    //     console.log("questionIndex", questionIndex)
    //     console.log("elem.prize:", elem.prize, "prize:", prize)
    //     setTimeout(() => {
    //         setSelectedAnswerIndex(null)
    //         if(elem.correct_answer === index && questionIndex < (data.length - 1)) {
    //             const num = questionIndex + 1
    //             setQuestionIndex(num)
    //             setPrize(elem.prize)
    //         } else if(elem.correct_answer === index && questionIndex === data.length - 1) {
    //             history.push('/gameOver', {sum: elem.prize});
    //         } else {
    //             history.push('/gameOver', {sum: prize});
    //         }
    //     }, 1000)
    // })
    const getResult = ((elem, index) =>{
        setSelectedAnswerIndex(index)
        // console.log("questionIndex", questionIndex)
        // console.log("elem.prize:", elem.prize, "prize:", prize)
        setTimeout(() => {
            setSelectedAnswerIndex(null)
            if(elem.correct_answer === index){
                if(questionIndex === data.length - 1) {
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

    // const getBorderColor = (index, correct_answer) => {
    //     if (selectedAnswerIndex === index) {
    //         return correct_answer === index ? 'correctAnswer' : 'wrongAnswer'
    //     }
    //     if (selectedAnswerIndex !== null && correct_answer === index) {
    //         return 'correctAnswer'
    //     }
    //     return ''
    // }
    const getBorderColor = (index, correct_answer) => {
        if (selectedAnswerIndex === index) {
            return correct_answer === index ? 'correctAnswer' : 'wrongAnswer'
        }
        if (selectedAnswerIndex !== null && correct_answer === index) {
            return 'correctAnswer'
        }
    }


    return(
        <div className="container2">
            <div className="positionAnswQues">
                <div>
                    <p className="question">{selectedLevel.question}</p>
                </div>
                <div className="answerOptionsContainer">
                    {selectedLevel.answers.map((answer, index) => (
                        <div onClick={() => getResult(selectedLevel, index)}>
                            {/*{console.log("selectedLevel.correct_answer", selectedLevel.correct_answer, "index", index)}*/}
                            <p className={`answerOptions blackText ${getBorderColor(index, selectedLevel.correct_answer)}`}>
                                <span className="value">{letters[index]}</span>
                                {answer}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="prizeTable">
                {data.map(({prize}, index)=><div key={index} className = {index === questionIndex ? "activeScore" : "score"}>
                   <p className="blackText">{prize}</p></div>)}
            </div>

        </div>
    )
}

export default Game;