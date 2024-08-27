import React, { useEffect } from 'react';
import './Homescreen.css';
import Chatbox from '../Chatbox/Chatbox';

function Homescreen() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    useEffect(() => {
        const tooltip = document.querySelector('.tooltip');
        tooltip.classList.add('show');
        const timer = setTimeout(() => {
            tooltip.classList.remove('show');
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

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
        </div>
    );
}

export default Homescreen;