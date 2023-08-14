import { DEFAULT_META_DESC, DEFAULT_META_IMG, DEFAULT_META_TITLE } from '@/lib/assets';
import Head from 'next/head';
import React from 'react'

const CustomSeo = ({ title, description, link, ogImage }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="title" content={title || DEFAULT_META_TITLE} />
                <meta name="description" content={description || DEFAULT_META_DESC} />


                <meta property="og:type" content="website" />
                <meta property="og:url" content={link} />
                <meta property="og:title" content={title || DEFAULT_META_TITLE} />
                <meta property="og:description" content={description || DEFAULT_META_DESC} />
                <meta property="og:image" content={ogImage || DEFAULT_META_IMG} />


                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={link} />
                <meta property="twitter:title" content={title || DEFAULT_META_TITLE} />
                <meta property="twitter:description" content={description || DEFAULT_META_DESC} />
                <meta property="twitter:image" content={ogImage || DEFAULT_META_IMG} />
            </Head>
        </>


    )
}

export default CustomSeo;