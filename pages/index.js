import React from 'react'

import Banner from '../components/LandingBanner'

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}

const Index = () => (
    <section style = { styles.container }>
        <Banner />
    </section>
)

export default Index