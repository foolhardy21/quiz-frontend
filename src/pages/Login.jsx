import { Header } from "components/Reusable"
import { useAuth, useTheme } from "contexts"
import { useState } from "react"
import { getBgColor, getSolidBtnBgColor, getSolidBtnTxtColor, getTextColor } from "utils"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
    const [loginForm, setLoginForm] = useState({
        email: '',
        password: '',
        passwordType: 'password',
        alert: {
            message: '',
            type: ''
        }
    })
    const navigate = useNavigate()
    const location = useLocation()
    const { theme } = useTheme()
    const { setLoggedInUser } = useAuth()

    const from = location?.state?.from?.pathname || '/'

    const handlePasswordTypeChange = (e) => {
        if (e.target.checked) {
            setLoginForm(f => ({ ...f, passwordType: 'text' }))
        } else {
            setLoginForm(f => ({ ...f, passwordType: 'password' }))
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const auth = getAuth();
        try {
            const authResponse = await signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
            localStorage.setItem('quizUser', JSON.stringify(authResponse.user))
            setLoggedInUser(authResponse.user)
            setLoginForm(f => ({ ...f, alert: ({ message: 'logged in', type: 'success' }) }))
            setTimeout(() => { setLoginForm(f => ({ ...f, alert: ({ message: '', type: '' }) })); navigate(from, { replace: true }) }, 2000)
        } catch (e) {
            setLoginForm(f => ({ ...f, alert: ({ message: e.code.slice(5,).split('-').join(' '), type: 'error' }) }))
            setTimeout(() => setLoginForm(f => ({ ...f, alert: ({ message: '', type: '' }) })), 2000)
        }
        setLoginForm(f => ({
            ...f, email: '',
            password: ''
        }))
    }

    return (
        <div
            style={{
                minHeight: '100vh'
            }}
            className={getBgColor(theme)}
        >
            <Header />
            <div className="flx flx-center pd-xs">
                {
                    loginForm.alert.type === 'success'
                        ? <div className="bg-success txt-secondary txt-md txt-500 txt-cap pd-s">{loginForm.alert.message}</div>
                        : loginForm.alert.type === 'error'
                            ? <div className="bg-err txt-secondary txt-md txt-500 txt-cap pd-s">{loginForm.alert.message}</div>
                            : ''
                }
            </div>

            <section className="flx flx-center mg-top-lg">
                <article className={`flx flx-column flx-center card-dim ${theme === 'dark' && 'b-solid b-secondary'} card-shadow-xs pd-md`}>
                    <p className={`txt-lg txt-cap ${getTextColor(theme)}`}>login</p>
                    <form onSubmit={handleFormSubmit} className="flx flx-column mg-top-lg">
                        <input placeholder="enter your email" required type='email' value={loginForm.email} onChange={(e) => setLoginForm(f => ({ ...f, email: e.target.value }))} className={`input input-md ${getBgColor(theme)} ${getTextColor(theme)} pd-xs txt-md mg-btm-xs`} />

                        <input placeholder="enter your password" required type={loginForm.passwordType} value={loginForm.password} onChange={(e) => setLoginForm(f => ({ ...f, password: e.target.value }))} className={`input input-md ${getBgColor(theme)} ${getTextColor(theme)} pd-xs txt-md mg-btm-xs`} />

                        <div className="flx flx-min-center flx-maj-end mg-top-s">
                            <label className={`txt-md ${getTextColor(theme)} txt-cap`}>
                                <input type='checkbox' onChange={handlePasswordTypeChange} className='mg-right-xs' />
                                show password
                            </label>
                        </div>

                        <button type='submit' className={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTxtColor(theme)} txt-md txt-ucase pd-xs mg-top-lg`}>
                            login
                        </button>
                        <button onClick={() => navigate('/signup')} type='button' className={`btn-txt ${getTextColor(theme)} txt-md txt-cap pd-xs mg-top-xs`}>
                            signup
                        </button>
                    </form>
                </article>
            </section>
        </div>
    )
}

export default Login 