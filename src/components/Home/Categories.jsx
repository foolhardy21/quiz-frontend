import hM from 'assets/h-m.jpg'
import hS from 'assets/h-s.jpg'
import nbaM from 'assets/nba-m.jpg'
import nbaS from 'assets/nba-s.jpg'
import sneakM from 'assets/sneak-m.jpg'
import sneakS from 'assets/sneak-s.jpg'
import styles from './home.module.css'

const Categories = () => {

    return (
        <section className={`grid grid-maxcols-3 ${styles.categoryGrid} mg-top-md mg-btm-md`}>

            <article className="pos-relative">

                <img srcSet={`${hM} 400w, ${hS} 250w`} sizes='(max-width: 768px) 250px, 400px' alt='hip hop category' />

                <div className={`pos-absolute tl-0 ${styles.overlayDiv} flx flx-center`}>
                    <p className="txt-secondary txt-lg txt-lcase txt-500">sneakers in hiphop</p>
                </div>

            </article>

            <article className="pos-relative">

                <img srcSet={`${nbaM} 400w, ${nbaS} 250w`} sizes='(max-width: 768px) 250px, 400px' alt='nba category' />

                <div className={`pos-absolute tl-0 ${styles.overlayDiv} flx flx-center`}>
                    <p className="txt-secondary txt-lg txt-lcase txt-500">sneakers in nba</p>
                </div>

            </article>

            <article className="pos-relative">

                <img srcSet={`${sneakM} 400w, ${sneakS} 250w`} sizes='(max-width: 768px) 250px, 400px' alt='general category' />

                <div className={`pos-absolute tl-0 ${styles.overlayDiv} flx flx-center`}>
                    <p className="txt-secondary txt-lg txt-lcase txt-500">guess the sneaker</p>
                </div>

            </article>

        </section>
    )
}

export default Categories