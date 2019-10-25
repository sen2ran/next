import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import HeaderContextProvider from '../State/Contexts/HeaderContext'


class MyApp extends App {
    componentDidMount() {
        // Router.push({
        //     pathname: '/ca/support',
        // })
    }
    render() {
        const { Component, pageProps } = this.props
        return (
            <HeaderContextProvider>
                <Component {...pageProps} />
            </HeaderContextProvider>
        )
    }
}

export default MyApp