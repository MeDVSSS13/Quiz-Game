import React from 'react'
import "./questionBlock.style.scss"

export const QuestionBlock = ({onClick, number}) => {
  return (
      <div className='questionBlock' onClick={onClick}>
          {number}
    </div>
  )
}
