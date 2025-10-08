import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Roomlist from './components/Roomlist'
import BookingForm from './components/BookingForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <Header />      
      <Roomlist />
      <BookingForm />
      <Footer />

    </div>
        
  )
}

export default App
