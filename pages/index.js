import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home = () => (
  <div className={styles.container}>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/github.ico" />
    </Head>

    <h1 className={styles.title}>
      Go to my
      <Link href={'/repositories'}>
        <a> repositories!</a>
      </Link>
    </h1>
  </div>
);

export default Home;
