import React from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'

export default async function Meals() {
  const meals = await getMeals()

  return (
    <>
      <header className={styles.header}>
        <h1>Delecious meals, created <span className={styles.highlights}>by you</span></h1>
        <p>Choose your recipe and cook it yourself. It is easy and fun!</p>
        <p className={styles.cta}>
          <Link href="/meals/share">
            Share Your Favorite Recipe
          </Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
    
  )
}
