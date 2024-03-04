import React, { useState, useEffect } from 'react'
import "./sideBar.style.scss"

export const SideBar = ({ question, answer, isOpen, onClose, answerVisibility }) => {
    // State to store the visibility of the answer
    const [answerShown, setAnswersShown] = useState(answerVisibility || false);

    useEffect(() => {
        setAnswersShown(answerVisibility);
    }, [question, answerVisibility]);
  return (
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={onClose}>Close</button>
          <h2>{question}</h2>
          <button onClick={() => setAnswersShown(!answerShown)}>
              {answerShown ? "Hide Answer" : "Show Answer"}</button>
          {answerShown && (
                <div>
                    <h3>Answer:</h3>
                    <p>{answer}</p>
                </div>
            )}
    </div>
  )
}
