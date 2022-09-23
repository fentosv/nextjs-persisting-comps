import Link from 'next/link'
import { useState } from 'react'
import styles from './Header.module.css'
export default function Header() {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount((count) => count + 1)
  }

  return (
    <>
      <header className={styles.container}>
        <h3>Header</h3>
        <nav className={styles['nav-container']}>
          <Link href={'/'}> Home </Link>
          <Link href={'/page'}> Page </Link>
        </nav>
        <div className={styles.counter}>
          <button className={styles.counter__button} onClick={increment}>
            +1
          </button>
          <div className={styles.counter__text}>
            <em>{count}</em>
            {'<-'} I can persist between pages, but I am rerendering :(
          </div>
        </div>
      </header>
    </>
  )
}
