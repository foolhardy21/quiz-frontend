import { useAuth, useTheme } from "contexts"
import { useNavigate } from "react-router-dom"
import { getIconColor, getTextColor } from "utils"
import { getAuth, signOut } from "firebase/auth";
import styles from './reusable.module.css'

const Header = () => {
    const { theme, toggleTheme } = useTheme()
    const navigate = useNavigate()
    const { loggedInUser, setLoggedInUser } = useAuth()

    const handleLogOutUser = async () => {
        const auth = getAuth();
        try {
            await signOut(auth)
            localStorage.removeItem('quizUser')
            setLoggedInUser({})
        } catch (e) {
            console.log(e.code)
        }

    }

    const handleLogInUser = () => {
        navigate('/login')
    }

    return (
        <header className={`${styles.headerBtnBorder} flx flx-maj-even flx-min-center pd-md`}>

            <p className={`txt-lg txt-ucase txt-400 ${getTextColor(theme)}`}>sneakerhead</p>
            {
                loggedInUser?.email
                    ? <button onClick={handleLogOutUser} className={`btn-txt ${getTextColor(theme)} txt-md txt-lcase`}>
                        logout
                    </button>
                    : <button onClick={handleLogInUser} className={`btn-txt ${getTextColor(theme)} txt-md txt-lcase`}>
                        login
                    </button>
            }
            <button onClick={toggleTheme} className="btn-txt">
                <span className={`material-icons ${getIconColor(theme)} pd-xs`}>
                    {theme === 'light' ? 'dark_mode' : 'light_mode'}
                </span>
            </button>

        </header>
    )
}

export default Header