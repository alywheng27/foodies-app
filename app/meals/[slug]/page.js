import React from 'react'

export default async function MealItem({ params }) {
    const { slug } = await params
    
    return (
        <main>
            <h1>{ slug }</h1>
        </main>
    )
}
