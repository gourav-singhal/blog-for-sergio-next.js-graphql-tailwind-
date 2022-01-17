import React, { PropsWithChildren } from 'react';

// import Head from 'next/head';
// import { useRouter } from 'next/router';
// import { PreloadProvider } from '@/context/PreloadContext';
import Footer from './Footer';
import Header from './Header';

import { ICustomMetadata } from '@/types/interfaces';

interface IProps {
  customMetadata?: ICustomMetadata;
}

export default function Layout({
  children,
  customMetadata,
}: PropsWithChildren<IProps>) {
  // const router = useRouter();

  // const metadata = {
  //   title: 'Sergio Barria - Engineer, developer and writer',
  //   description:
  //     'Personal blog portfolio website. Created with Next.js, GraphCMS, and Tailwind CSS',
  //   image: 'https://www.sergiobarria.com/static/images/banner.png',
  //   type: 'website',
  //   keywords:
  //     "Sergio Barria's blog, HTML, CSS, JavaScript, Next js, Gatsby, React, Node, View, Tailwind CSS, React Native, Flutter",
  //   ...customMetadata,
  // };
  return (
    <>
      {/* <Head>
        <title>{metadata.title}</title>
        <meta name='robots' content='index, follow' />
        <meta content={metadata.description} name='description' />
        <meta
          property='og:url'
          content={`https://www.sergiobarria.com${router.asPath}`}
        />
        <link
          rel='canonical'
          href={`https://www.sergiobarria.com${router.asPath}`}
        />
        <meta property='og:type' content={metadata.type} />
        <meta property='og:site_name' content='Sergio Barria' />
        <meta property='og:description' content={metadata.description} />
        <meta property='og:title' content={metadata.title} />
        <meta property='og:image' content={metadata.image} />
        <meta property='og:image:width' content='800' />
        <meta property='og:image:height' content='600' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@sergioBarria01' />
        <meta name='twitter:title' content={metadata.title} />
        <meta name='twitter:description' content={metadata.description} />
        <meta name='twitter:image' content={metadata.image} />
        <meta name='keywords' content={metadata.keywords} />
        {metadata.date && (
          <meta property='article:published_time' content={metadata.date} />
        )}
      </Head> */}
      <Header />
      {/* <PreloadProvider> */}
      <main>{children}</main>
      {/* </PreloadProvider> */}
      <Footer />
    </>
  );
}
