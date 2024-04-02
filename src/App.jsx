
import styles from './App.module.css'
import About from './components/About/About'
import Home from './components/Navbar/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <section className={styles.App}>
      <Navbar />
      <Home />
      <About />
     
    </section>
  )
}

export default App
