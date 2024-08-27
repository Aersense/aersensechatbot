import React, { useState, useEffect } from 'react';
import { questions } from './questions';

function Chatbox({ handleClose, open }) {
    const [list, setList] = useState([]);
    const [ques, setQues] = useState(0);
    const [faq, setFaq] = useState(false);
    const [startBtn, setStartBtn] = useState(false);
    const [botImg, setBotImg] = useState(true);
    const [chatStarted, setChatStarted] = useState(false);
    const [message, setMessage] = useState('');
    const [chat, setChat] = useState([]);

    useEffect(() => {
        if (faq && ques < questions.length) {
            setQues(prev => prev + 1);
            setTimeout(() => {
                setList([...list, questions[ques]['title']]);
            }, 1500);
        } else if (ques === questions.length) {
            setStartBtn(true);
        }
    }, [list, faq, ques]);

    useEffect(() => {
        setTimeout(() => {
            setFaq(true);
        }, 2000);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setBotImg(!botImg);
        }, 2000);
    }, [open, botImg]);

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

    const handleStartConversation = () => {
        setChatStarted(true);
        setList([]);
        setFaq(false);
        setStartBtn(false);
    };

    const handleSendMessage = () => {
        if (message.trim()) {
            setChat([...chat, { sender: 'user', text: message }]);
            setMessage('');
        }
    };

    return (
        <div className={`fixed bottom-5 right-5 w-full max-w-md md:max-w-lg lg:max-w-xl z-50 bg-white rounded-lg h-full md:h-3/4 lg:h-2/3 shadow-lg overflow-hidden ${chatStarted ? 'max-h-[90vh]' : 'max-h-[70vh]'}`}>
            <div className="flex flex-col h-full">
                <div className="bg-orange-600 text-white p-4 text-center">
                    <h1 className="text-xl font-semibold Aersense">Aersense</h1>
                    <h2 className="text-lg Hello">Hello 👋</h2>
                    <div className="mt-2 text-justify AersenseText">
                        <p>I am Aero bot, a Virtual Assistant</p>
                    </div>
                </div>

                <div className="p-4 flex-grow overflow-y-auto">
                    {!chatStarted ? (
                        <>
                            <div className="mb-4">
                                <img src="./bot.svg" alt="bot" className="mx-auto w-16 h-16 text-orange-400" />
                            </div>
                            <div>
                                <h2 className="text-lg font-semibold mb-2">Frequently Asked Questions</h2>
                                {faq && (
                                    <ul className="space-y-2">
                                        {list.length > 0 && list.map((question, key) => (
                                            <li key={key} className="flex items-center">
                                                <span className="mr-2">⦿</span>
                                                {question}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            {startBtn && (
                                <div className="mt-4 text-center">
                                    <button
                                        className="bg-orange-600 text-white py-2 px-4 rounded-md"
                                        onClick={handleStartConversation}
                                    >
                                        Start a New Conversation
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <div className="flex flex-col h-full">
                            <div className="flex-grow overflow-y-auto">
                                {chat.map((msg, index) => (
                                    <div key={index} className={`p-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
                                        <span className={`inline-block p-2 rounded-md ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}>
                                            {msg.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="flex-grow p-2 border rounded-md"
                                    placeholder="Type your message..."
                                />
                                <button
                                    className="bg-orange-600 text-white py-2 px-4 rounded-md"
                                    onClick={handleSendMessage}
                                >
                                    Send
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <button className="absolute top-2 right-2 text-white" onClick={handleClose}>close</button>
            </div>
        </div>
    );
}

export default Chatbox;