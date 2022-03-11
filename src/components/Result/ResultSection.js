import { ResultCard } from "./"
import { questions, answers } from '../../data/index'

const ResultSection = () => {

    return (
        <section className="grid grid-maxcols-3">
            {
                questions.map((ques, index) => <ResultCard
                    key={ques.id}
                    ques={ques}
                    ans={answers[index]} />)
            }
        </section>
    )
}

export default ResultSection