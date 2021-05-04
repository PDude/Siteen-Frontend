import NextNprogress from 'nextjs-progressbar'
import Layout from '../components/Layout'
import '../styles/globals.sass'

function MyApp({ Component, pageProps }) {
  return (
    <>
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
