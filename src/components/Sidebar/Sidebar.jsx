import React, { useState } from 'react'
import './sidebar.css'
import { assets } from '../../assets/assets'
export const Sidebar = () => {
    const [extend, setExtend] = useState(true)
    
    const handleMenu = () => {
       
        setExtend(prevExtend => !prevExtend)
    }
    return (
        <div className="sidebar">

            <div className="side-top">
                <img onClick={handleMenu} className='menu' src={assets.menu_icon} alt="" />
                <div className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extend ? <p>New Chat</p> : null}

                </div>
               
                {extend ?
                    <div className="recent">
                        <p className='r-title'>Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="" />
                            {extend ? <p>Lorem ipsum</p> : null}
                        </div>
                    </div>
                    :
                    null
                }

            </div>

            <div className="side-bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" />
                    {extend ? <p>Help</p> : null}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" />
                    {extend ? <p>Activity</p> : null}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" />
                    {extend ? <p>Settings</p> : null}
                </div>

            </div>
        </div>
    )
}
