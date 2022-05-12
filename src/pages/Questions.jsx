import { createRef, useEffect, useRef, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import { Header } from "components/Reusable"
import { useScore, useTheme, useQuestions } from "contexts"
import { getBgColor, getTextColor } from "utils"
import styles from './questions.module.css'
import { db } from "firebase-config"
import { query, collection, where, getDocs } from 'firebase/firestore'

const Questions = () => {
    const [currentQuestionCounter, setCurrentQuestionCounter] = useState(1)
    const [currentQues, setCurrentQues] = useState({})
    const optionBtnRefs = useRef([])
    const { questions, setQuestions } = useQuestions()
    const { score, setScore } = useScore()
    const { theme } = useTheme()
    const params = useParams()

    useEffect(() => {
        (async () => {
            const category = params.category
            const questionsQuery = query(collection(db, 'questions'), where('category', '==', category))
            const questionsDocs = await getDocs(questionsQuery)
            setQuestions(questionsDocs.docs.map((doc, index) => ({ counter: index + 1, question: doc._document.data.value.mapValue.fields.question.stringValue, answer: doc._document.data.value.mapValue.fields.answer.stringValue, options: doc._document.data.value.mapValue.fields.options.arrayValue.values.map(option => option.stringValue) })))
        })()
    }, [])

    useEffect(() => {
        if (questions.length > 0) {
            setCurrentQues(questions.find(ques => ques.counter === currentQuestionCounter))
        }
    }, [questions])

    useEffect(() => {
        setCurrentQues(questions.find(ques => ques.counter === currentQuestionCounter))
    }, [currentQuestionCounter])

    const handleOptionSelect = ref => {

        if (ref.current.value === currentQues.answer) {
            ref.current.style.background = 'var(--clr-success)'
            setTimeout(() => { ref.current.style.background = 'var(--clr-primary)'; setScore(s => s + 1) }, 1000)

        } else {
            ref.current.style.background = 'var(--clr-error)'
            setTimeout(() => ref.current.style.background = 'var(--clr-primary)', 1000)
        }
        setTimeout(() => {
            setCurrentQuestionCounter(c => c + 1)
        }, 1500)

    }

    optionBtnRefs.current = currentQues?.options?.map((option, i) => optionBtnRefs[i] ?? createRef())

    return currentQuestionCounter !== questions.length ? (
        <div
            style={{
                minHeight: '100vh'
            }}
            className={getBgColor(theme)}
        >
            <Header />
            <section className="flx flx-center mg-top-md">
                {
                    <article className="card-dim card-shadow-xs flx flx-column pd-md">
                        <p>{score}/{questions.length}</p>
                        <p className={`txt-md card-txtw-md ${getTextColor(theme)} txt-cap mg-btm-s`}>
                            {currentQues?.question}
                        </p>
                        {
                            currentQues?.img &&
                            <div className="flx flx-center mg-btm-xs">
                                <img srcSet={currentQues?.img} alt='sneaker' className={styles.imgQuestion} />
                            </div>
                        }
                        {
                            currentQues?.options?.map((option, index) =>
                                <button key={index} ref={optionBtnRefs.current[index]} onClick={() => handleOptionSelect(optionBtnRefs.current[index])} value={option} className="btn-outlined txt-md txt-cap b-solid b-primary pd-xs mg-btm-xs">
                                    {option}
                                </button>)
                        }
                    </article>
                }
            </section>
        </div>
    ) : <Navigate to={`/${params.category}/results`} />
}

export default Questions