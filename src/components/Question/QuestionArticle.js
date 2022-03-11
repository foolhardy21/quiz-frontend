import { useState } from "react"
import { Card, Text, Button } from "../Reusable"
import { questions } from '../../data/questions.data'

const QuestionArticle = () => {
    const [quesIndex, setQuesIndex] = useState(0)
    const [score, setScore] = useState(0)

    function handleOptionClick(e) {
        // update score
        if (e.target.value === questions[quesIndex].answer) {
            setScore(s => s + 1)
        }

        // update question
        if (quesIndex !== questions.length - 1) {
            setQuesIndex(i => i + 1)
        }
        else {
            // go to results page
        }

    }

    return (

        <Card classes="pd-md mg-top-md">

            <div className="flx flx-maj-stretch mg-btm-md">

                <Text classes="txt-cap txt-primary txt-md">
                    {`q${quesIndex + 1}`}
                </Text>

                <Text classes="txt-cap txt-primary txt-md">{`score - ${score}/5`}</Text>

            </div>

            <Text classes="txt-md flx flx-center txt-primary mg-btm-md">
                {questions[quesIndex].ques}
            </Text>

            <div className="flx flx-column">

                {
                    questions[quesIndex].options.map(option => <Button key={option} onClick={(e) => handleOptionClick(e)}
                        value={option}
                        classes="btn-txt txt-md txt-primary txt-ucase bg-primary mg-btm-xs pd-xs">{option}</Button>)
                }

            </div >

        </Card >
    )
}

export default QuestionArticle