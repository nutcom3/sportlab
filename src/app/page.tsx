"use client";

import styles from './page.module.css'
import React, {  useEffect } from 'react'
import Football from '../../components/football';
import Basketball from '../../components/basketball';

export default function Home() {
  return (
    <main className={styles.main}>
      <Football />
      <Basketball />
    </main>
  )
}
