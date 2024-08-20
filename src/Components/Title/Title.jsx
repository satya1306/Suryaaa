import React from 'react'
import './Title.css'

function Title({title}) {
  return (
    <div className='title'>
      <h3>
       {title}
      </h3>
    </div>
  )
}

export default Title
