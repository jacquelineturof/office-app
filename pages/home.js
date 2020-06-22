import React from 'react'

import Grid from '../components/HomeGrid'

const styles = {
    container: {
        width: '100%',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

const home = () => (
    <section style = { styles.container }>
        <Grid />
    </section>
)

export default home