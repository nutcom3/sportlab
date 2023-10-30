import styles from './content.module.css'

export default function Content(props: any) {
  let content = props.data;
  return (
    <div
      className={`slider2
        ${content.title === 'CONNECTION' ? styles.first : ''}
        ${content.title === 'COLLABORATION' ? styles.second : ''}
        ${content.title === 'GROWTH' ? styles.thrid : ''}`
      } >
      <div className={`${styles.article2}`} >
        <div className={styles.title2}>
          <div className={styles.titlenumber2}>{content.no}</div>
          <div className={styles.titletext2}>{content.title}</div>
        </div>
        <div className={`${styles.description2}`}>
          {content.description}
        </div>
      </div>
    </ div>
  )
}