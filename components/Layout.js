import React from 'react'

import Nav from '../components/UI/Nav'

const styles = {
    container: {
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#eee'
    }
}

const Layout = ({ children }) => (
    <section style = { styles.container }>
        <Nav />
        { children }
    </section>
)

export default Layout