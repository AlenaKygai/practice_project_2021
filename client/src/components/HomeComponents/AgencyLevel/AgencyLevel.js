import React from 'react';
import articles from './AgencyLevel.json';
import styles from './AgencyLevel.module.sass';

const iconColors=[
  {color:'#dc3545',backgroundColor:'#ff000033'},
  {color:'#00c9a7',backgroundColor:'rgb(0 220 167 / 10%)'},
  {color:'#0000ff',backgroundColor:'#0000ff33'}
]

const AgencyLevel = () =>{
  return(
    
    <section className={styles.container}>
      <h2 className={styles.containerTitle}>agency level expirience</h2>
      <div className={styles.articleWrapper}>
      { 
      articles.map((article,index)=>{
        console.log(article)
        return(
          <article key={index} className={styles.articleBody}>
            <div style={iconColors[index]} className={styles.articleIconBlock}>
              <i class={`${article.icon} fa-2x`}></i>
            </div>
            <h3 className={styles.articleTitle}>{article.title}</h3>
            <p className={styles.description}>{article.description} <a href={article.link} className={styles.articleLink}>Lear more</a>
            </p>
          </article>
        )
      })
    }
    </div>
    </section>
  )
}
export default AgencyLevel;