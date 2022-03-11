import { Text } from "../Reusable"
import { ResultHeader, ResultSection } from "./"

const Result = () => {

    return (
        <>
            <ResultHeader />


            <div className="flx flx-column flx-center">

                <Text classes="txt-primary txt-md txt-cap mg-top-md mg-btm-md">you are a sneakerhead - 4/6</Text>

                <ResultSection />

            </div>
        </>
    )
}

export default Result