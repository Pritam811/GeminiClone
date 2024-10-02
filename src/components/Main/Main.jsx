import React, { useContext } from 'react'
import './main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

export const Main = () => {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context)

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleClick = () => {
    onSent()
  }



  return (
    <div className="main">

      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="container">

        {!showResult ? 
        <>
          <div className="greet">
            <p><span>Hello, Bro</span></p>
            <p>এইখানে কি? কাজকাম নাই?</p>
          </div>

          <div className="cards">
            <div className="card">
              <p>Explain the impact of globalization</p>
              <img src={assets.compass_icon} alt="" />
            </div>

            <div className="card">
              <p>Give me a beginner's guide to an activity</p>
              <img src={assets.message_icon} alt="" />
            </div>

            <div className="card">
              <p>Suggest a Python library to solve a problem</p>
              <img src={assets.code_icon} alt="" />
            </div>

            <div className="card">
              <p>Explain the following code step-by-step in detail</p>
              <img src={assets.code_icon} alt="" />
            </div>
          </div>
        </>
          :
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {
              loading?
              <div className='loader'>

              </div>
              :
              <p >{resultData}</p>
              }
              
            </div>
          </div>
          }



        <div className="main-bottom">
          <div className="search">
            <input onChange={handleChange} value={input} type="text" placeholder='Enter a prompt here' />
            <div className="images">
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img onClick={handleClick} src={assets.send_icon} alt="" />
            </div>

          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
          </p>
        </div>
      </div>
    </div>
  )
}
