import { categories } from 'data'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './home.module.css'

const Categories = () => {
    const [categoriesState, setCategoriesState] = useState([])

    useEffect(() => {
        setCategoriesState(categories)
    }, [])

    return (
        <section className={`grid grid-maxcols-3 ${styles.categoryGrid} mg-top-md mg-btm-md`}>

            {
                categoriesState.map(category =>

                    <Link key={category.name} to={`/${category.name}`}>
                        <article className="pos-relative">

                            <img srcSet={category.srcSet} sizes='(max-width: 768px) 250px, 400px' alt='hip hop category' />

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