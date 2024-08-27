import React, { useState, useEffect } from 'react';
import { questions } from './questions';

function Chatbox({ handleClose, open }) {
    const [list, setList] = useState([]);
    const [ques, setQues] = useState(0);
    const [faq, setFaq] = useState(false);
    const [startBtn, setStartBtn] = useState(false);
    const [botImg, setBotImg] = useState(true);

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

    return (
        <div className="fixed bottom-5 right-5 w-72 max-h-[70vh] z-50 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col h-full">
                <div className="bg-orange-600 text-white p-4 text-center">
                    <h1 className="text-xl font-semibold">Aersense</h1>
                    <h2 className="text-lg">Hello 👋</h2>
                    <div className="mt-2">
                        <p>I am Aersense bot, a Virtual Assistant</p>
                        <p>How may I help you today?</p>
                    </div>
                </div>

                <div className="p-4 overflow-y-auto flex-grow">
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
                            <button className="bg-orange-600 text-white py-2 px-4 rounded-md">
                                Start a New Conversation
                            </button>
                        </div>
                    )}
                </div>
                <button className="absolute top-2 right-2 text-white" onClick={handleClose}>close</button>
            </div>
        </div>
    );
}

export default Chatbox;
