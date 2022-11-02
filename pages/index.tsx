import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Heading from './components/Ui/Heading'
import Hero from './components/Ui/Hero'





export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CakeHouse</title>
        <meta name="description" content="Cake Shope in pabra Nehla Kenho hisar haryana" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Heading/>
  <Hero/>



    </div>
  )
}
