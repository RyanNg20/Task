import Head from 'next/head';
import '../styles/global.css';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Task</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}