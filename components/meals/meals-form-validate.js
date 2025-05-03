"use client"

import React from 'react'
import { useActionState } from 'react'
import { shareMeal } from '@/lib/action'


export default function MealsFormValidate({ children, className }) {
    const [state, formAction] = useActionState(shareMeal, {messaage: null})

    return (
        <form className={className} action={formAction}>
            {children}
            {state.message && <p>{state.message}</p>}
            {/* How to Send the state var to /share/page.js */}
        </form>
    )
}
