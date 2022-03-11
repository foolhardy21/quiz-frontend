import { Button, Card, Icon, Text } from "../Reusable"

const ResultCard = () => {

    return (
        <Card classes="pd-lg pos-relative">

            <Icon class="material-icons txt-err pos-absolute tr-1">
                clear
            </Icon>

            <div className="flx flx-maj-start mg-btm-lg">

                <Text classes="txt-cap txt-primary txt-md">q1</Text>

            </div>

            <Text classes="card-txtw-md txt-cap txt-primary txt-md mg-btm-lg">Lorem ipsum dolor sit amet consectetur,
                adipisicing elit.
                Deleniti,
                consequatur.
            </Text>

            <div className="flx flx-column">

                <Button
                    classes="btn-outlined b-solid b-primary txt-md txt-primary bg-primary mg-btm-xs pd-xs">lorem</Button>

                <Button classes="btn-solid txt-md txt-secondary bg-success mg-btm-xs pd-xs">lorem</Button>

                <Button
                    classes="btn-outlined b-solid b-primary txt-md txt-primary bg-primary mg-btm-xs pd-xs">lorem</Button>

                <Button classes="btn-solid txt-md txt-secondary bg-err mg-btm-xs pd-xs">lorem</Button>

            </div>

        </Card>
    )
}

export default ResultCard