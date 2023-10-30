"use client";

import Image from 'next/image'
import styles from './basketball.module.css'
import BasketBall from '../../public/basketball.svg'
import PlusDark from '../../public/plusdark.svg'
import Plus from '../../public/plus.svg'
import Line from '../../public/line.svg'
import React, { useState, useEffect } from 'react'
import Content from './content';
import Player from './player';

export interface IContent {
  no: string,
  title: string,
  description: string
}

let connection: IContent = {
  no: "01",
  title: "CONNECTION",
  description: "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1."
}

let collaboration: IContent = {
  no: "02",
  title: "COLLABORATION",
  description: "Work with recruiter to increase your chances of findingtalented athlete."
}

let growth: IContent = {
  no: "03",
  title: "GROWTH",
  description: "Save your time, recruit proper athlets for your team."
}

export default function Basketball() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const slides: HTMLCollection = document.getElementsByClassName('slider2') as HTMLCollection;
    const dots2: HTMLCollection = document.getElementsByClassName('dot2') as HTMLCollection;

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
        Array.from(dots2).forEach((dot, i) => {
          dot.className = dot.className.replace(styles.active, "");
        });

        (slides[slideIndex - 1] as HTMLElement).style.display = "block";
        (dots2[slideIndex - 1] as HTMLElement).className += ` ${styles.active}`;
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
      <div onClick={() => plusSlides(1)}>
        <Player />

        <Image src={Plus} alt="plus" className={styles.plusBasketball} width={0} height={0} />
        <Image src={PlusDark} alt="plusdark" className={styles.plusDarkBasketball} width={0} height={0} />
        <Image src={PlusDark} alt="plusdark2" className={styles.plusDarkBasketball2} width={0} height={0} />
        <Image src={BasketBall} alt="BasketBall" className={styles.basketball} width={0} height={0} />
        <Image src={Line} alt="line" className={styles.lineBas} width={0} height={0} />
        <Image src={Line} alt="line2" className={styles.lineBas2} width={0} height={0} />

        <Content data={connection} />
        <Content data={collaboration} />
        <Content data={growth} />

        <div className={styles.dotgroup2}>
          <span className={`dot2 ${styles.dot2}`} onClick={() => currentSlide(1)}></span>
          <span className={`dot2 ${styles.dot2}`} onClick={() => currentSlide(2)}></span>
          <span className={`dot2 ${styles.dot2}`} onClick={() => currentSlide(3)}></span>
        </div>
      </div>
    </div>
  )
}
