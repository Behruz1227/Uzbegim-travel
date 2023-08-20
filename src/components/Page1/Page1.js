import React from 'react'
import './Page1.css'
import uzbekistan from "../../assets/vedio/uzbekistan.gif"

const Page1 = () => {
  return (
    <div className='page-1-main'>
      <div className="overlay"></div>
      <img className='page-1-vedio' src={uzbekistan} alt="." />
      <div className="content">
        <h1 className='page-1-h1'>O'zbegim Travelga Xush Kelibsiz </h1>
        <p className='page-1-p'>O'zbekistonning istalgan hududida biz bilan birga sayohat qiling</p>
      </div>
    </div>
  )
}

export default Page1;