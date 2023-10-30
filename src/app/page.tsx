"use client";

import styles from './page.module.css'
import React, { useState, useEffect } from 'react'
import Football from '../../components/football';

export default function Home() {
  return (
    <main className={styles.main}>
      <Football />
    </main>
  )
}
