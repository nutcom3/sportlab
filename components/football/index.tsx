"use client";

import Image from 'next/image'
import styles from './football.module.css'
import FootBall from '../../public/football.svg'
import PlusDark from '../../public/plusdark.svg'
import Plus from '../../public/plus.svg'
import Line from '../../public/line.svg'
import React, { useState, useEffect } from 'react'
import Content from './content';
import Athlets from './athlets';

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
  description: "Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1."
}

let growth: IContent = {
  no: "03",
  title: "GROWTH",
  description: "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc"
}

export default function Football() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const slides: HTMLCollection = document.getElementsByClassName('slider') as HTMLCollection;
    const dots: HTMLCollection = document.getElementsByClassName('dot') as HTMLCollection;

    const showSlides = (n: number) => {
      /* if mobile size */
      if (window.innerWidth <= 619) {
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

    showSlides(slideIndex);
    const handleResize = () => {
      showSlides(slideIndex);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [slideIndex]);

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
    <div className={styles.main}>
      <div className={styles.footballContent} onClick={() => plusSlides(1)}>
        <Athlets />

        <Image src={Plus} alt="plus" className={styles.plusFootball} width={0} height={0} />
        <Image src={PlusDark} alt="plusdark" className={styles.plusDarkFootball} width={0} height={0} />
        <Image src={FootBall} alt="Football" className={styles.football} width={0} height={0} />
        <Image src={Line} alt="line" className={styles.line} width={0} height={0} />

        <Content data={connection} />
        <Content data={collaboration} />
        <Content data={growth} />

        <div className={styles.dotgroup}>
          <span className={`dot ${styles.dot}`} onClick={() => currentSlide(1)}></span>
          <span className={`dot ${styles.dot}`} onClick={() => currentSlide(2)}></span>
          <span className={`dot ${styles.dot}`} onClick={() => currentSlide(3)}></span>
        </div>
      </div>
    </div>
  )
}
