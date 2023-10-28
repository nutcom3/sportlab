import Image from 'next/image'
import styles from './page.module.css'
import FootBall from '../../public/football.svg'

export default function Home() {
  return (
    <main className={styles.main}>
      <Image src={FootBall} alt="Football" className={styles.football} width={0} height={0} />
      <div className={styles.connection}>
        <div className={styles.article}>
          <div className={styles.athlets}>ATHLETS</div>
          <div className={styles.title}>
            <div className={styles.titlenumber}>01</div>
            <div className={styles.titletext}>CONNECTION</div>
          </div>
          <div className={styles.description}>
            Connect with coaches directly, you can ping coaches to view profile.
          </div>
        </div>
      </div>

      <div className={`${styles.rowleft} ${styles.collaboration}`}>
        <div className={styles.article}>
          <div className={styles.title}>
            <div className={styles.titlenumber}>02</div>
            <div className={styles.titletext}>COLLABORATION</div>
          </div>
          <div className={styles.description}>
            Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
          </div>
        </div>
      </div>

      <div className={`${styles.rowleft} ${styles.growth}`}>
        <div className={styles.article}>
          <div className={styles.title}>
            <div className={styles.titlenumber}>03</div>
            <div className={styles.titletext}>GROWTH</div>
          </div>
          <div className={styles.description}>
          Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc 
          </div>
        </div>
      </div>
    </main>
  )
}
