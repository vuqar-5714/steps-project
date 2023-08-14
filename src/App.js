import React from 'react'
import "./App.css"
import { useState } from 'react'

const message = [
  "Understand the Basics HTML, CSS, and JS 🖤",
  "Master HTML and CSS 📶",
  "Learn JavaScript 👌",
  "Explore Version Control 😎",
  "Choose a Code Editor ✌️",
  "Responsive Design and CSS Frameworks ⚛️",
  "Get Familiar with Browser Dev Tools 🌐",
  "Learn a Frontend an JS Frameworks ☑️",
  "Explore Web Performance 🔄️",
  "Build Projects and Practice 💵"
]

const App = () => {

const [step , setStep]=useState(1)

  return (
    <div className='parent-container'>
    <div className='container'>
      <p>A roadmap for learning Frontend</p>
      <div className='count'>
        <div className={step>=1?"active":""}>1</div>
        <div className={step>=2?"active":""}>2</div>
        <div className={step>=3?"active":""}>3</div>
        <div className={step>=4?"active":""}>4</div>
        <div className={step>=5?"active":""}>5</div>
        <div className={step>=6?"active":""}>6</div>
        <div className={step>=7?"active":""}>7</div>
        <div className={step>=8?"active":""}>8</div>
        <div className={step>=9?"active":""}>9</div>
        <div className={step>=10?"active":""}>10</div>
      </div>

      <div className='steps-text'>
        <p>Step{step}: {message[step-1]}</p>
      </div>

      <div className='my-btn'>
        <button className='change-btn' onClick={()=>setStep(prevStep=>prevStep-1)}>Previous</button>
        <button className='change-btn' onClick={()=>setStep(prevStep=>prevStep+1)}>Next</button>
      </div>
    </div>
    </div>
  )
}

export default App
