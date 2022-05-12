import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { Header } from "components/Reusable"
import { useTheme } from "contexts"
import { getBgColor, getTextColor } from "utils"
import { db } from "firebase-config"
import { query, collection, where, getDocs } from 'firebase/firestore'

const Rules = () => {
    const [rulesState, setRulesState] = useState([])
    const params = useParams()
    const { theme } = useTheme()

    useEffect(() => {
        (async () => {
            const category = params.category
            const rulesQuery = query(collection(db, 'rules'), where('category', '==', category))
            const rulesDocs = await getDocs(rulesQuery)
            setRulesState(rulesDocs.docs[0]._document.data.value.mapValue.fields.rules.arrayValue.values.map(rule => rule.stringValue))
        })()
    }, [])

    return (
        <div
            style={{
                minHeight: '100vh'
            }}
            className={getBgColor(theme)}
        >
            <Header />
            <section className="flx flx-center mg-top-md">
                <article className={`card-dim card-shadow-xs ${theme === 'dark' && 'b-solid b-secondary'} pd-md`}>
                    <ul>
                        {
                            rulesState?.map((rule, index) =>
                                <li key={index} style={{ listStyle: 'circle' }} className={`${getTextColor(theme)} txt-md txt-cap mg-btm-s`}>
                                    {rule}
                                </li>
                            )
                        }
                    </ul>
                    <div className="flx flx-maj-end">
                        <Link to={`/${params.category}/questions`}>
                            <button className="btn-solid bg-success txt-secondary txt-md pd-s txt-ucase">
                                play
                            </button>
                        </Link>
                    </div>
                </article>
            </section>
        </div>
    )

}

export default Rules