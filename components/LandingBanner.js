import React from 'react'

import Link from 'next/link'

import Button from '../components/UI/Button'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import classes from './LandingBanner.module.css'

const List = () => (
    <ul className = { classes.List }>
        <li className = { classes.Item }>
            <FontAwesomeIcon 
                icon = { [ 'fal', 'check' ] } 
                className = { classes.Icon } />
            <p className = { classes.Label }>
                Group Calendar
            </p> 
        </li>
        <li className = { classes.Item }>
            <FontAwesomeIcon 
                icon = { [ 'fal', 'check' ] } 
                className = { classes.Icon } />
            <p className = { classes.Label }>
                Contacts
            </p> 
        </li>
        <li className = { classes.Item }>
            <FontAwesomeIcon 
                icon = { [ 'fal', 'check' ] } 
                className = { classes.Icon } />
            <p className = { classes.Label }>
                Notes
            </p>  
        </li>
    </ul>
)

const Header = () => (
    <header className = { classes.Header }>
        <h1 className = { classes.Heading }>Office Productivity Made Easy</h1>
        <List />
        <div className = { classes.ButtonContainer }>
            <Button type = "Primary">
                <Link href="/auth">
                    <a className = "Link">JOIN FOR FREE</a>
                </Link>
            </Button>
        </div>
    </header>
)

const LandingBanner = () => (
    <div className = { classes.Banner }>
        <Header />
    </div>
)

export default LandingBanner