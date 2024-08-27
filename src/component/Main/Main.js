import React from 'react';
import logo from "../../image/aersense.gif"


const Main = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between mt-10 sm:mt-[-2%] items-center bg-black text-white h-screen p-4">
            <div className="flex-1 mb-8 sm:mb-0">
                <img
                    src={logo}
                    alt="rabbit r1"
                    className="mx-auto max-w-[370px]  sm:max-w-[650px]"
                />
            </div>

            <div className="flex-1 text-center sm:text-right mt-[-55%] sm:mt-10">
                <div className="text-container sm:text-justify">
                    <h1 className="head text-4xl sm:text-6xl font-light mb-4 text-white max-w-[80%]  sm:max-w-[50%] mx-auto sm:mx-0">
                        MATAER 1
                    </h1>
                    <p className=" head1 text-lg sm:text-2xl font-serif mb-4 text-gray-400 max-w-[80%] sm:max-w-[63%] leading-relaxed mx-auto sm:mx-0">
                        your smart home companion, Powered by <span className="text-white">AERSENSE <span className="text-red-600">™</span></span>
                    </p>
                    <p className=" head2 text-sm font-semibold text-gray-400 mb-8 max-w-[60%] sm:max-w-[45%] mx-auto sm:mx-0">
                        ships in November 2024
                    </p>
                    <p className="text-2xl sm:text-3xl mb-2 flex justify-center sm:justify-start items-center">
                        <svg className='inline text-[#ff4d06]' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12" /><path d="M6 8h12" /><path d="m6 13 8.5 8" /><path d="M6 13h3" /><path d="M9 13c6.667 0 6.667-10 0-10" /></svg>
                        <p className='text-[#ff4d06] head3'>8999</p>
                        <span className="text-sm ml-2 INR">INR</span>
                    </p>
                    <p className="head4 text-sm text-gray-400 mb-8">
                        No Subscription
                    </p>
                    <button className="button1 bg-orange-500 text-white py-2 px-6 rounded-full flex items-center justify-center mx-auto sm:mx-0">
                        add to bag
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M13 7l5 5m0 0l-5 5m5-5H6"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Main;
