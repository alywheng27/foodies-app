import React, { Suspense } from 'react'
import Link from 'next/link'
import styles from './page.module.css'
import MealsGrid from '@/components/meals/meals-grid'
import { getMeals } from '@/lib/meals'

async function Meals() {
  const meals = await getMeals()

  return <MealsGrid meals={meals} />
}

function Loading() {
  return (
    <h2 className={styles.loading}>Fetching meals...</h2>
  )
}

export default function MealsPage() {
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
        <Suspense fallback={<Loading />}>
          <Meals />
        </Suspense>
      </main>
    </>
    
  )
}
