import React from 'react';
import Head from 'next/head'
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

const AuthLayout = ({
    name,
    title,
    shortDescription,
    image,
    url,
    children
}) => {
    return (
        <div>
            <Head>
                <title>{name.toUpperCase()}</title>
                <meta property="og:title" content={title} ></meta>
                <meta property="og:description" content={shortDescription} ></meta>
                <meta property="og:image" content={image} ></meta>
                <meta property="og:url" content={url} ></meta>

                {/* No Need change */}
                <meta property="og:site_name" content="Clartytts" ></meta>
                <meta name="twitter:card" content="summary_large_image" ></meta>
                <meta name="twitter:image:alt" content="Alt text for image" ></meta>

                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
                    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"></link>
                <link rel="stylesheet" href="/app.css" />
            </Head>
            <Header />
            <main role="main" className="container">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default AuthLayout;