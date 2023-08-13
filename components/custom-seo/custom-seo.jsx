import Head from 'next/head';
import React from 'react'

const CustomSeo = ({ title, description, link, ogImage }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />


                <meta property="og:type" content="website" />
                <meta property="og:url" content={link} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={ogImage} />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={link} />
                <meta property="twitter:title" content={title} />
                <meta property="twitter:description" content={description} />
                <meta property="twitter:image" content={ogImage} />
            </Head>
        </>


    )
}

export default CustomSeo;