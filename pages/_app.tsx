import NextNprogress from 'nextjs-progressbar'
import Layout from '../components/Layout'
import '../styles/globals.sass'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
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
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
