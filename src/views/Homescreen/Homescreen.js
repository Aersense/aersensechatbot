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

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
        script.type = "text/javascript";
        script.onload = () => {
            window.voiceflow.chat.load({
                verify: { projectID: '66996cdfb1b42c8b73adbc97' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production'
            });
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="homescreen ml-10">
            <div className="chat-box">
                {open && <Chatbox handleClose={handleOpen} open={open} />}
            </div>
            <div className="chat-button">
                <div className="tooltip">
                    Hi, how can I help you?
                </div>
                <button onClick={handleOpen} className='hidden'>
                    <img src="./chat.png" alt="chat-icon" />
                </button>
            </div>
        </div>
    );
}

export default Homescreen;