import styles from '../styles/Home.module.css';
import Button from '@material-ui/core/Button';
import MoodIndicator from '../src/components/MoodIndicator'


export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.card}> 
          <h1>Hi</h1>
          <h1>I'm Hireoo</h1>
      <MoodIndicator />
      </div>
    </div>
  )
}
