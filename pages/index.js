import { useContext } from 'react'
import CountContext from '../context/count/count.context'
import styles from '../styles/Home.module.css'

export default function Home() {

  const {counter, increment, decrement, reset} = useContext(CountContext)
  console.log(counter)
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.view} >
          <h2>counter: {counter}</h2>
        </div>
        <div className={styles.buttons} >
        <button onClick={increment} className={styles.btn} >UP </button>
        <button onClick={decrement} className={styles.btn}>DOWN </button>
        <button onClick={reset} className={styles.btn}  >RESET </button>
     
        <input placeholder='NUMBER' className={styles.input} min='0' type={'number'}/>

        </div>
      </div>
    </div>
  )
}
