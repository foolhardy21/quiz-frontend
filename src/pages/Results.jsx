import { Header } from "components/Reusable"
import { useScore, useTheme } from "contexts"
import { useQuestions } from "contexts/questions.context"
import { useNavigate } from "react-router-dom"
import { getBgColor } from 'utils'
import styles from './results.module.css'

const Results = () => {
    const { score, setScore } = useScore()
    const { questions, setQuestions } = useQuestions()
    const { theme } = useTheme()
    const navigate = useNavigate()

    const handleFinish = () => {
        setQuestions([])
        setScore(0)
        navigate('/')
    }

    return (
        <div
            style={{
                minHeight: '100vh'
            }}
            className={getBgColor(theme)}
        >
            <Header />

            <div className="flx flx-column flx-center">
                <article className="card-dim card-shadow-xs flx flx-column mg-top-xlg mg-btm-xlg pd-s">
                    <p className="txt-md txt-primary txt-cap">congrats!</p>
                    <p className="txt-md txt-primary txt-cap">you have scored {score} points</p>
                    <div className="flx flx-maj-end mg-top-xs">
                        <button onClick={handleFinish} className="btn-solid bg-secondary txt-secondary txt-md txt-cap pd-xs">finish</button>
                    </div>
                </article>
                <p className='txt-lg txt-primary txt-600 txt-cap mg-btm-s'>correct answers</p>
                <section className={`grid grid-maxcols-3 ${styles.resultGrid} pd-top-s mg-btm-md`}>
                    {
                        questions.map(question => <article key={question.counter} className="card-dim card-shadow-xs flx flx-column flx-center pd-s">
                            <p className="card-txtw-s txt-md txt-primary txt-cap mg-btm-xs">{question.question}</p>
                            {
                                question?.img &&
                                <div className="flx flx-center mg-btm-xs">
                                    <img srcSet={question?.img} alt='sneaker' className={styles.imgQuestion} />
                                </div>
                            }
                            <p className="txt-md txt-secondary bg-success txt-ucase pd-xs">{question.answer}</p>
                        </article>)
                    }
                </section>
            </div>
        </div>
    )
}

export default Results