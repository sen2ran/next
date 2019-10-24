import React from 'react'
import App from 'next/app'
import HeaderContextProvider from '../State/Contexts/HeaderContext'


class MyApp extends App {
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