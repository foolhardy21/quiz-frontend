const Header = (props) => {

    return (

        <header id="pg-header" className="flx flx-maj-even pd-top-md pd-btm-md">
            {props.children}
        </header>
    )
}

export default Header