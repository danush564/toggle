import { useState } from 'react'
import './App.css'
import EyePNG from "../src/assets/eye.png"


function App() {
  const [count, setCount] = useState(false)

  const toggleFunction = () => {
    setCount(prevCount => !prevCount);
  }

  return (
    <div>
      <div className="container">
      <img src={EyePNG} alt="eyegif" style={{ height: '50px', width: '70px' }} />
      <h1>Name: DANUSH S</h1>
      <h4>Registration No: 123456</h4>
      <button onClick={toggleFunction}>Show Details</button>
      {count ? <div className='toggle'>Additional details or content can go here...</div> : ""}
      </div>
    </div>
  )
}

export default App

