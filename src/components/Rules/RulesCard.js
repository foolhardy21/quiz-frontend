import { rules } from "../../data"
import { Button, Card, Text } from "../Reusable"

const RulesCard = () => {

    return (

        <Card classes="mg-top-md pd-lg">

            <Text classes="txt-lg mg-btm-md txt-primary txt-cap">
                Before you start
            </Text>

            <ul>
                {
                    rules.map(rule => <li key={rule.id} className="txt-md txt-primary mg-btm-xs card-txtw-md">{rule.rule}</li>
                    )
                }
            </ul>

            <div className="flx flx-maj-end">
                <Button classes="btn-solid txt-ucase txt-md txt-secondary bg-success pd-s">
                    start
                </Button>
            </div>

        </Card>

    )
}

export default RulesCard