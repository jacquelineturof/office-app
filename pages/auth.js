import React from 'react'

import AuthForm from '../components/AuthForm'

const styles = {
    container: {
        width: '100%',
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}

const auth = () => {
    return (
        <section style = { styles.container }>
            <AuthForm />
        </section>
    )
}

export default auth