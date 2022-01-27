import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>The possibilities for using Wonderopolis in the classroom are endless, and we invite you to find classroom resources, lesson plans, correlations to education standards, and real-world applications in the Wonder Ground, a network we created especially to support educators.</p>
        <p className={styles.text}>With multi-disciplinary content that purposefully aligns to Common Core State Standards (CCSS), the STEM Educational Quality Framework, and Bloom's Digital Taxonomy, we've earned a place in K-12 curriculum and in classrooms worldwide. Teachers can use the daily Wonder to 
        jumpstart their students' critical thinking, or dip into our ever-growing collection of Wonders for content that relates to specific themes and student interests.</p>
        <Link href="/ninjas/">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  )
}