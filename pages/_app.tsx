import NextNprogress from 'nextjs-progressbar'
import Layout from '../components/Layout'
import '../styles/globals.sass'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'
import { Router } from 'next/router'
import { SmoothScroll } from '../utils/SmoothScroll'

function MyApp({ Component, pageProps }) {
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
      <ToastContainer />
      <NextNprogress
        color='#FAAA4C'
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />
      <Layout>
        <SmoothScroll>
          <Component {...pageProps} />
        </SmoothScroll>
      </Layout>
    </>
  )
}

export default MyApp
