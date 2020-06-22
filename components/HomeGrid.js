import React from 'react'

import classes from './HomeGrid.module.css'

const TILES = [
    "Calendar",
    "Todo",
    "Analytics",
    "Countdown",
    "Notes",
    "Groups",
    "Messaging",
    "Settings",
    "Weather"
]


const Tile = ({ tile }) => (
    <div className = { [ classes.Tile, classes[tile], classes.Background ].join(' ') }>
        <p className = { classes.Title }>{ tile }</p>
    </div>
)

const Grid = () => (
    <div className = { classes.Grid }>
        { 
            TILES.map(tile => 
                <Tile 
                    key = { tile }
                    tile = { tile } />)
        }
    </div>
)

export default Grid