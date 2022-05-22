import { Header } from "components/Reusable"
import { useAuth, useTheme } from "contexts"
import { useState } from "react"
import { getBgColor, getSolidBtnBgColor, getSolidBtnTxtColor, getTextColor } from "utils"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Signup = () => {
    const [signupForm, setSignupForm] = useState({
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
            setSignupForm(f => ({ ...f, passwordType: 'text' }))
        } else {
            setSignupForm(f => ({ ...f, passwordType: 'password' }))
        }
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()

        const auth = getAuth();
        try {
            const authResponse = await createUserWithEmailAndPassword(auth, signupForm.email, signupForm.password)
            localStorage.setItem('quizUser', authResponse.user)
            setLoggedInUser(authResponse.user)
            setSignupForm(f => ({ ...f, alert: ({ message: 'account created', type: 'success' }) }))
            setTimeout(() => { setSignupForm(f => ({ ...f, alert: ({ message: '', type: '' }) })); navigate(from) }, 2000)
        } catch (e) {
            setSignupForm(f => ({ ...f, alert: ({ message: e.code.slice(5,).split('-').join(' '), type: 'error' }) }))
            setTimeout(() => setSignupForm(f => ({ ...f, alert: ({ message: '', type: '' }) })), 2000)
        }
        setSignupForm(f => ({
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
                    signupForm.alert.type === 'success'
                        ? <div className="bg-success txt-secondary txt-md txt-500 txt-cap pd-s">{signupForm.alert.message}</div>
                        : signupForm.alert.type === 'error'
                            ? <div className="bg-err txt-secondary txt-md txt-500 txt-cap pd-s">{signupForm.alert.message}</div>
                            : ''
                }
            </div>

            <section className="flx flx-center mg-top-lg">
                <article className={`flx flx-column flx-center card-dim ${theme === 'dark' && 'b-solid b-secondary'} card-shadow-xs pd-md`}>
                    <p className={`txt-lg txt-cap ${getTextColor(theme)}`}>signup</p>
                    <form onSubmit={handleFormSubmit} className="flx flx-column mg-top-lg">
                        <input placeholder="enter your email" required type='email' value={signupForm.email} onChange={(e) => setSignupForm(f => ({ ...f, email: e.target.value }))} className={`input input-md ${getBgColor(theme)} ${getTextColor(theme)} pd-xs txt-md mg-btm-xs`} />

                        <input placeholder="enter your password" required type={signupForm.passwordType} value={signupForm.password} onChange={(e) => setSignupForm(f => ({ ...f, password: e.target.value }))} className={`input input-md ${getBgColor(theme)} ${getTextColor(theme)} pd-xs txt-md mg-btm-xs`} />

                        <div className="flx flx-min-center flx-maj-end mg-top-s">
                            <label className={`txt-md ${getTextColor(theme)} txt-cap`}>
                                <input type='checkbox' onChange={handlePasswordTypeChange} className='mg-right-xs' />
                                show password
                            </label>
                        </div>

                        <button type='submit' className={`btn-solid ${getSolidBtnBgColor(theme)} ${getSolidBtnTxtColor(theme)} txt-md txt-ucase pd-xs mg-top-lg`}>
                            signup
                        </button>
                    </form>
                </article>
            </section>
        </div>
    )
}

export default Signup 