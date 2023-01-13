import '../styles/globals.css'
import Layout from '../components/layout/layout'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>NextJS Events</title>
        <meta name='description' content='NextJs Events' />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}
