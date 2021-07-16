import React from 'react'
import { AppProps } from 'next/app'
import NextNprogress from 'nextjs-progressbar'
import Layout from '../components/Layout'
import '../styles/globals.sass'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { Router } from 'next/router'
import { SmoothScroll } from '../utils/SmoothScroll'
import Head from 'next/head'

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    })
  }, [])

  return (
    <>
      <Head>
        <title>Siteen | Digital Agency</title>
        <meta name='description' content='Solutions for Digital Business.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='Web-Application, CRM-System, iOS/Android App, Motion Design, Graphics, siteen, develop web-site, develop mobile app'
        />
        <meta name='og:site_name' content='Siteen | Digital Agency' />
        <meta property='og:title' content='Siteen | Digital Agency' />
        <meta property='og:type' content='article' />
        <meta property='og:url' content='https://siteen.co/' />
        <meta property='og:image' content='https://siteen.co/logo.svg' />
        <meta
          property='og:description'
          content='⚡SITEEN | Digital Agency⚡ ➤ Automation your business ➤ Create Web-Application ➤ CRM-System ➤ iOS/Android App 📥 siteen.co@gmail.com'
        />
        <meta name='author' content='Siteen' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
      </Head>
      <ToastContainer />
      <NextNprogress
        color='#FAAA4C'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <SmoothScroll>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SmoothScroll>
    </>
  )
}

export default MyApp
