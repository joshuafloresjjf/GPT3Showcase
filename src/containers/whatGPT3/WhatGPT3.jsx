import React from 'react'
import { Feature } from '../../components'
import './whatGPT3.css'

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin " id="wgpt3">
      <div className="gpt3__whatggpt3-feature">
        <Feature />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text"> The possiblities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gtp3__whatgpt3-container">
        <Feature/>
        <Feature/>
        <Feature/>
      </div>
    </div>
  )
}

export default WhatGPT3