import { Main } from '../Reusable'
import { QuestionHeader, QuestionArticle } from './'

const Question = () => {

    return (
        <>
            <QuestionHeader />

            <Main classes="flx flx-center mg-top-lg">

                <QuestionArticle />

            </Main>
        </>
    )
}

export default Question