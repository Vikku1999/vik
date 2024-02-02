import React from 'react'
import "./intro.scss";
import "./a.scss";


export default function Intro() {
  return (
    
    <div className='intro' id='intro'>
    
      <div className='left'>
      <div className='imgContainer'>
        <img src='asset/vikpic.png' alt=''/>

      </div>
      </div>
      <div className='right'>
        
        <div className='wrapper'>
          <h2> Hello There, I'm </h2>
          <h1> VIKASH JAIN</h1>
          <h3>    Software Developer</h3>
          

        </div>

      </div>
      
    </div>
  )
}
