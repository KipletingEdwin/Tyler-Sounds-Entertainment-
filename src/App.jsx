
import styles from './App.module.css'
import About from './components/About/About'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <section className={styles.App}>
      <Navbar />
      <Home />
      <About />
      <Footer />
     
    </section>
  )
}

export default App
