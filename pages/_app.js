import Head from 'next/head'
import Layout from '../components/layout/layout'
import { NotificationContextProvider } from '../store/notification-context';
import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <NotificationContextProvider>
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
      </NotificationContextProvider>
    </SessionProvider>
  )
}
