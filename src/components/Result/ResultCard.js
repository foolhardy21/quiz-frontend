const ResultCard = () => {

    return (
        <article class="card-dim card-shadow-xs pd-lg pos-relative">
            <span class="material-icons txt-err pos-absolute tr-1">
                clear
            </span>
            <div class="flx flx-maj-start mg-btm-lg">
                <p class="txt-cap txt-primary txt-md">q1</p>
            </div>
            <p class="card-txtw-md txt-cap txt-primary txt-md mg-btm-lg">Lorem ipsum dolor sit amet consectetur,
                adipisicing elit.
                Deleniti,
                consequatur.</p>
            <div class="flx flx-column">
                <button
                    class="btn-outlined b-solid b-primary txt-md txt-primary bg-primary mg-btm-xs pd-xs">lorem</button>
                <button class="btn-solid txt-md txt-secondary bg-success mg-btm-xs pd-xs">lorem</button>
                <button
                    class="btn-outlined b-solid b-primary txt-md txt-primary bg-primary mg-btm-xs pd-xs">lorem</button>
                <button class="btn-solid txt-md txt-secondary bg-err mg-btm-xs pd-xs">lorem</button>
            </div>
        </article>
    )
}

export default ResultCard