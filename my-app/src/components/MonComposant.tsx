import { useState } from 'react'
import styles from './MonComposant.module.css'


export default function MonComposant() {

const [count, setCount] = useState(0);

  return (
    <div className={styles.card}>
      <h2 className={styles.h1}>composant</h2>

      <button onClick={() => setCount(count => count + 1)}>{count}</button>

    </div>
  )
}
