import React from 'react'

import Link from 'next/link'

import Button from '../UI/Button'

import classes from './Nav.module.css'

const Nav = () => (
    <nav className = { classes.Nav }>
        <h1 className = { [ "Uppercase", classes.AppName ].join(' ')}>
            <span className = "LightPrimary">super</span>cubicle
        </h1>
        <Button type = "Primary">
            <Link href="/auth">
                <a className = "Link">JOIN FOR FREE</a>
            </Link>
        </Button>
    </nav>
)

export default Nav