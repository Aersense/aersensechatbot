import React from 'react'
import './Homescreen.css'
import Chatbox from '../Chatbox/Chatbox'

function Homescreen() {
    const [open, setOpen] = React.useState(false)

    const handleOpen = () => {
        setOpen(!open)
    }

    const openLink = () => {
        window.open('https://github.com/neeleshio/chatbot-ui', '_blank');
    }

    const downloadFolder = () => {
        window.open('https://github.com/neeleshio/chatbot-ui/archive/refs/heads/master.zip', '_blank');
    }

    return (
        <div id="homescreen">
            <div className="chat-box">
                {open && <Chatbox handleClose={handleOpen} open={open} />}
            </div>
            <div className="chat-button">
                <div className="tooltip">
                    Hi, how can I help you?
                </div>
                <button onClick={handleOpen} className='bg-[#]'>
                    <img src="./chat.png" alt="chat-icon" />
                </button>
            </div>

        </div >
    )
}

export default Homescreen
