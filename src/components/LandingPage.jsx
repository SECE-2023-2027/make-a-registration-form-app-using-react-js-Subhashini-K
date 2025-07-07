import { useState } from 'react'
import './LandingPage.css'

const LandingPage = ({ onSignup, showWelcome, userName }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name.trim() && email.trim()) {
      onSignup(name, email)
      setName('')
      setEmail('')
    }
  }

  return (
    <div className="landing-page">
      {/* Left Section - Content */}
      <div className="left-section">
        <div className="content-container">
          <div className="hero-content">
            <h1 className="main-title">
              Find Your Inner
              <span className="highlight"> Peace</span>
            </h1>
            <p className="subtitle">
              Discover the transformative power of mindfulness and meditation. 
              Join thousands who have found clarity, reduced stress, and improved 
              their mental well-being through our guided practices.
            </p>
            
            <div className="benefits-grid">
              <div className="benefit-item">
                <div className="benefit-icon">🧘‍♀️</div>
                <span>Reduce Stress</span>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">💚</div>
                <span>Improve Focus</span>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">✨</div>
                <span>Better Sleep</span>
              </div>
              <div className="benefit-item">
                <div className="benefit-icon">🌱</div>
                <span>Personal Growth</span>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="floating-elements">
            <div className="floating-leaf leaf-1">🍃</div>
            <div className="floating-leaf leaf-2">🌿</div>
            <div className="floating-leaf leaf-3">🍃</div>
            <div className="meditation-circle circle-1"></div>
            <div className="meditation-circle circle-2"></div>
            <div className="meditation-circle circle-3"></div>
          </div>
        </div>
      </div>

      {/* Right Section - Signup Form */}
      <div className="right-section">
        <div className="form-container">
          {!showWelcome ? (
            <div className="signup-card">
              <h2 className="form-title">Begin Your Journey</h2>
              <p className="form-subtitle">Start your mindfulness practice today</p>
              
              <form onSubmit={handleSubmit} className="signup-form">
                <div className="input-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                
                <div className="input-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <button type="submit" className="submit-button">
                  Start Meditating
                </button>
              </form>
              
              <p className="form-note">
                🔒 Your information is secure and private
              </p>
            </div>
          ) : (
            <div className="welcome-card">
              <div className="welcome-icon">🙏</div>
              <h2 className="welcome-title">Hello, {userName}!!</h2>
              <p className="welcome-message">
                Welcome to your mindfulness journey. Let's begin with peace and intention.
              </p>
              <div className="zen-circle"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
