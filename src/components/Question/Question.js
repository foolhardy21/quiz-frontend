import { Main } from '../Reusable'
import { QuestionHeader, QuestionArticle } from './'

const Question = () => {

    return (
        <>
            <QuestionHeader />

            <Main classes="flx flx-center">

                <QuestionArticle />

            </Main>
        </>
    )
}

export default Question