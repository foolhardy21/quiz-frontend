
const Card = (props) => {

    return (
        <article id="article-ques" className={`card-dim card-shadow-xs ${props.classes}`}>
            {props.children}
        </article>
    )
}

export default Card