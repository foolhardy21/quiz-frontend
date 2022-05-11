import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs } from 'firebase/firestore'
import styles from './home.module.css'
import { db } from 'firebase-config'
import { fetchImage } from 'utils'

const Categories = () => {
    const [categoriesState, setCategoriesState] = useState([])

    useEffect(() => {
        (async () => {
            const categoriesCollection = collection(db, 'categories')
            const categoriesDocs = await getDocs(categoriesCollection)
            setCategoriesState(categoriesDocs.docs.map(doc => ({ imgM: doc._document.data.value.mapValue.fields.imgM.stringValue, imgS: doc._document.data.value.mapValue.fields.imgS.stringValue, name: doc._document.data.value.mapValue.fields.name.stringValue })))
        })()
    }, [])

    useEffect(() => {
        if (categoriesState.length > 0) {
            categoriesState.map(async category => {
                const imgM = await fetchImage(category.imgM)
                const imgS = await fetchImage(category.imgS)
                return { ...category, imgM, imgS }
            })
        }
    }, [categoriesState])

    return (
        <section className={`grid grid-maxcols-3 ${styles.categoryGrid} mg-top-md mg-btm-md`}>

            {
                categoriesState.map(category =>

                    <Link key={category.name} to={`/${category.name}`}>
                        <article className="pos-relative">

                            <img srcSet={`${category?.imgM} 400w, ${category?.imgS} 250w`} sizes='(max-width: 768px) 250px, 400px' alt='category' />

                            <div className={`pos-absolute tl-0 ${styles.overlayDiv} flx flx-center`}>
                                <p className="txt-secondary txt-lg txt-lcase txt-500">{category.name}</p>
                            </div>

                        </article>
                    </Link>)
            }

        </section>
    )
}

export default Categories