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
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
        />
        <title>Siteen | Digital Agency</title>
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
