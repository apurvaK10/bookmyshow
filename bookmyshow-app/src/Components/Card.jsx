import React from 'react'
import styles from './Styling/Card.module.css';

const Card = ({ banner_image_url="https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-MWsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70/et00096384-yuwlfbxsjm-portrait.jpg"
    , movie_name = "Wonder Women"
    , movie_genre = [{
        "genre": "Action"
       },
       {
        "genre": "Adventure"
       },
       {
        "genre": "Fantasy"
       }] }) => {
    return (
        <div className={styles.card}> 
            <img src={banner_image_url} alt={movie_name} />
            <div className={styles.title}>{ movie_name }</div>
            <div className={styles.genre}>{movie_genre?.map(genre=>genre.genre + "/")}</div>
        </div>
    )
}

export default Card
