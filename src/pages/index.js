import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <>
    <Head>
<title> People list | Home</title>
<meta name="keywords" content="ninjas"/>
    </Head>
    <div>
         
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti explicabo est expedita libero dolorem nam, blanditiis officia eos quo voluptatum?</p>
<p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti explicabo est expedita libero dolorem nam, blanditiis officia eos quo voluptatum?</p>
<Link className={styles.btn} href="/ninjas">See people listing</Link>

    </div>

    </>
   
  )
}
