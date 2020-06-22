import App from "next/app"

import Layout from '../components/Layout'

import '../App.css'
import '../icon.config.js'

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};
        return {pageProps};
    }

    render () {
        const {Component, pageProps } = this.props;

        return (
            <Layout>
                <Component {...pageProps} />
            </Layout>
        )
    }
}

export default MyApp