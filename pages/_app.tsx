import React, { useEffect } from 'react'
import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import Layout from '../components/Layout'
import '../styles/globals.sass'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, [])

  return (
    <>
      <Head>
        {/* icon */}
        <link rel='icon' href='/favicon.ico' />
        {/* viewport */}
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        />
        {/* fonts */}
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap'
          rel='stylesheet'
        />
        {/* analytics */}
        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-VWFTD9KMMY'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VWFTD9KMMY', {
              page_path: window.location.pathname,
            });
            `
          }}
        />
        {/* keyword and description */}
        <meta
          name='keywords'
          content='Web-Application, CRM-System, iOS/Android App, Motion Design, Graphics, siteen, develop web-site, develop mobile app'
        />
        <meta name='description' content='Solutions for Digital Business.' />
        {/* microsoft meta */}
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        {/* og tags */}
        <meta property='og:title' content='Siteen | Digital Agency' />
        <meta property='og:type' content='website' />
        <meta
          property='og:description'
          content='⚡SITEEN | Digital Agency⚡ ➤ Automation your business ➤ Create Web-Application ➤ CRM-System ➤ iOS/Android App 📥 siteen.co@gmail.com'
        />
        <meta property='og:url' content='https://siteen.co/' />
        <meta property='og:image' content='/og-image.jpg' />
      </Head>
      <ToastContainer />
      <NextNprogress
        color='#FAAA4C'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
