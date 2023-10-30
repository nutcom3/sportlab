"use client";

import Image from 'next/image'
import styles from './page.module.css'
import FootBall from '../../public/football.svg'
import PlusDark from '../../public/plusdark.svg'
import Plus from '../../public/plus.svg'
import Line from '../../public/line.svg'
import React, { useState, useEffect } from 'react'
import Content from '../../components/content/content';

export interface IContent {
  no: string,
  title: string,
  description: string
}

let connection: IContent = {
  no: "01",
  title: "CONNECTION",
  description: "Connect with coaches directly, you can ping coaches to view profile."
}

let collaboration: IContent = {
  no: "02",
  title: "COLLABORATION",
  description: "Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1."
}

let growth: IContent = {
  no: "03",
  title: "GROWTH",
  description: "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc"
}

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(1);
  const slides: HTMLCollection = document.getElementsByClassName('slider') as HTMLCollection;
  const dots: HTMLCollection = document.getElementsByClassName('dot') as HTMLCollection;
  useEffect(() => {
    showSlides(slideIndex);

    const handleResize = () => {
      showSlides(slideIndex);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slideIndex]);

  const showSlides = (n: number) => {
    /* if mobile size */
    if (window.innerWidth <=  619) {
      if (n > slides.length) {
        setSlideIndex(1);
      }

      if (n < 1) {
        setSlideIndex(slides.length);
      }

      /* reset slide */
      Array.from(slides).forEach((slide, i) => {
        (slide as HTMLElement).style.display = "none";
      });

      /* reset dots */
      Array.from(dots).forEach((dot, i) => {
        dot.className = dot.className.replace(styles.active, "");
      });

      (slides[slideIndex - 1] as HTMLElement).style.display = "block";
      (dots[slideIndex - 1] as HTMLElement).className += ` ${styles.active}`;
    } else {
      Array.from(slides).forEach((slide, i) => {
        (slide as HTMLElement).style.display = "block";
      });
    }
  }

  const plusSlides = (index: number) => {
    let newIndex = slideIndex + index;
    if (newIndex > 3) {
      newIndex = 1;
    }
    setSlideIndex(newIndex);
  };

  const currentSlide = (index: number) => {
    setSlideIndex(index);
  };

  return (
    <main className={styles.main}>
      <div className={styles.footballContent} onClick={() => plusSlides(1)}>
        <div className={styles.athlets}>
          <div className={styles.headArticle}>
            <div className={styles.athletsText}>ATHLETS</div>
          </div>
        </div>

        <Image src={Plus} alt="plus" className={styles.plusFootball} width={0} height={0} />
        <Image src={PlusDark} alt="plusdark" className={styles.plusDarkFootball} width={0} height={0} />
        <Image src={FootBall} alt="Football" className={styles.football} width={0} height={0} />
        <Image src={Line} alt="line" className={styles.line} width={0} height={0} />

        <div className={`${styles.connection} slider`}>
          <Content data={connection} />
        </div>

        <div className={`${styles.collaboration} slider`}>
          <Content data={collaboration} />
        </div>

        <div className={`${styles.growth} slider`}>
          <Content data={growth} />
        </div>

        <div className={styles.dotgroup}>
          <span className={`dot ${styles.dot}`} onClick={() => currentSlide(1)}></span>
          <span className={`dot ${styles.dot}`} onClick={() => currentSlide(2)}></span>
          <span className={`dot ${styles.dot}`} onClick={() => currentSlide(3)}></span>
        </div>
      </div>
    </main>
  )
}
