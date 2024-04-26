
import styles from './App.module.css'
import About from './components/About/About'
// import Booking from './components/Booking/Booking'
import Contact from './components/Contact/Contact'
// import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services/Services'

function App() {

  return (
    <section className={styles.App}>
      <Navbar />
      <Home />
      <About />
      <Services />
      {/* <Booking /> */}
      <Contact />
      {/* <Footer /> */}
     
    </section>
  )
}

export default App
