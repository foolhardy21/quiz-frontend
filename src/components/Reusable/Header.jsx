import { useTheme } from "contexts"
import { getIconColor, getTextColor } from "utils"
import styles from './reusable.module.css'

const Header = () => {
    const { theme } = useTheme()

    return (
        <header className={`${styles.headerBtnBorder} flx flx-maj-even flx-min-center pd-md`}>

            <p className={`txt-lg txt-ucase txt-400 ${getTextColor(theme)}`}>sneakerhead</p>

            <button className="btn-txt">
                <span className={`material-icons ${getIconColor(theme)} pd-xs`}>
                    {theme === 'light' ? 'dark_mode' : 'light_mode'}
                </span>
            </button>

        </header>
    )
}

export default Header