import styles from './content.module.css'

export default function Content(props: any) {
  let content = props.data;
  return (
    <div
      className={`slider
        ${content.title === 'CONNECTION' ? styles.first : ''}
        ${content.title === 'COLLABORATION' ? styles.second : ''}
        ${content.title === 'GROWTH' ? styles.thrid : ''}`
      } >
      <div className={`${styles.article}`} >
        <div className={styles.title}>
          <div className={styles.titlenumber}>{content.no}</div>
          <div className={styles.titletext}>{content.title}</div>
        </div>
        <div className={`${styles.description}`}>
          {content.description}
        </div>
      </div>
    </ div>
  )
}