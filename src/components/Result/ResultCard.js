import { Button, Card, Icon, Text } from "../Reusable"

const ResultCard = ({ ques, ans }) => {

    return (
        <Card classes="pd-lg pos-relative">

            <Icon classes={`${ques.answer === ans ? 'txt-success' : 'txt-err'} pos-absolute tr-1`}>
                {`${ques.answer === ans ? 'check' : 'clear'}`}
            </Icon>

            <div className="flx flx-maj-start mg-btm-lg">

                <Text classes="txt-cap txt-primary txt-md">
                    {`q${ques.id}`}
                </Text>

            </div>

            <Text classes="card-txtw-md txt-cap txt-primary txt-md mg-btm-lg">
                {ques.ques}
            </Text>

            <div className="flx flx-column">

                {

                    ques.options.map(option =>

                        (option === ques.answer)

                            ? <Button key={option}
                                classes="btn-solid txt-md txt-secondary bg-success mg-btm-xs pd-xs">{option}</Button>

                            : (option !== ques.answer && option === ans)

                                ? <Button key={option}
                                    classes="btn-solid txt-md txt-secondary bg-err txt-md mg-btm-xs pd-xs">{option}</Button>

                                : <Button key={option}
                                    classes="btn-outlined b-solid b-primary txt-md bg-primary txt-primary txt-md mg-btm-xs pd-xs">{option}</Button>

                    )
                }

            </div>

        </Card>
    )
}

export default ResultCard