import React from 'react'
import { useNavigate } from 'react-router-dom'
import './homePage.style.scss'

export const HomePage = () => {
    const navigate = useNavigate();
    const startQuiz = () => {
        navigate('/categories');
    };

  return (
      <div className='home-page'>
          <h1>Welcome to the Trivia Quiz App</h1>
          <button onClick={startQuiz}>Start Quiz</button>
          <button>Settings</button>
          <button>Help</button>
          <button>About</button>
    </div>
  )
}
