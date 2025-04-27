import React from 'react'
import Link from 'next/link'

export default function Meals() {
  return (
    <main>
        <h1>Our Meals</h1>
        <p><Link href="/meals/item-1">Item 1</Link></p>
        <p><Link href="/meals/item-2">Item 2</Link></p>
        <p><Link href="/meals/share">Share</Link></p>
    </main>
  )
}
