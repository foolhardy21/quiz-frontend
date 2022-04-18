import hM from 'assets/h-m.jpg'
import hS from 'assets/h-s.jpg'
import nbaM from 'assets/nba-m.jpg'
import nbaS from 'assets/nba-s.jpg'
import sneakM from 'assets/sneak-m.jpg'
import sneakS from 'assets/sneak-s.jpg'

export const categories = [
    {
        name: 'hiphop',
        srcSet: `${hM} 400w, ${hS} 250w`
    },
    {
        name: 'nba',
        srcSet: `${nbaM} 400w, ${nbaS} 250w`
    }
    ,
    {
        name: 'guess',
        srcSet: `${sneakM} 400w, ${sneakS} 250w`
    }
]