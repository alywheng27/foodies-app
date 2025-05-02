import React from 'react'
import styles from './loading.module.css'

export default function Loading() {
  return (
    <h2 className={styles.loading}>Fetching meals...</h2>
  )
}
