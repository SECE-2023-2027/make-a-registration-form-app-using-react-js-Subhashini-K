import { useState } from 'react'
import LandingPage from './components/LandingPage'
import './App.css'

function App() {
  const [userName, setUserName] = useState('')
  const [userEmail, setUserEmail] = useState('')
  const [showWelcome, setShowWelcome] = useState(false)

  const handleSignup = (name, email) => {
    setUserName(name)
    setUserEmail(email)
    setShowWelcome(true)
  }

  return (
    <div className="app">
      <LandingPage 
        onSignup={handleSignup} 
        showWelcome={showWelcome} 
        userName={userName} 
      />
    </div>
  )
}

export default App
