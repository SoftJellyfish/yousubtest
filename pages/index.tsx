import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SideBar from '../src/components/SideBar/SideBar'
import SearchBar from '../src/components/SearchBar/SearchBar'
import styles from '../styles/Home.module.css'
import Projects from '../src/components/Projects/Projects'

const Home: NextPage = () => {
  return (
    <>
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap" rel="stylesheet"/>
    </Head>
    <div className={styles.container}>
      <SideBar />
      <div>
        <Projects />
      </div>
    </div>
    </>
  )
}

export default Home
