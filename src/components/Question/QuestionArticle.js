import { Card, Text, Button } from "../Reusable"

const QuestionArticle = () => {

    return (

        <Card classes="pd-md mg-top-md">

            <div className="flx flx-maj-stretch mg-btm-md">

                <Text classes="txt-cap txt-primary txt-md">q1</Text>

                <Text classes="txt-cap txt-primary txt-md">score - 1/5</Text>

            </div>

            <Text classes="txt-md txt-primary mg-btm-md">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti,
                consequatur.</Text>

            <div className="flx flx-column">

                <Button
                    classes="btn-outlined b-solid b-secondary txt-md txt-primary bg-primary mg-btm-xs pd-xs">lorem</Button>
                <Button
                    classes="btn-outlined b-solid b-secondary txt-md txt-primary bg-primary mg-btm-xs pd-xs">lorem</Button>
                <Button
                    classes="btn-outlined b-solid b-secondary txt-md txt-primary bg-primary mg-btm-xs pd-xs">lorem</Button>
                <Button
                    classes="btn-outlined b-solid b-secondary txt-md txt-primary bg-primary mg-btm-xs pd-xs">lorem</Button>
            </div>

        </Card>
    )
}

export default QuestionArticle