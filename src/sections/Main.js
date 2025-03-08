import React from 'react'
import '../static/css/Main.css';
import '../static/js/text_iife.js';

const Main = () => {
    const colorArr = ['bg-red-300', 'bg-green-300', 'bg-blue-300', 'bg-amber-300', 'bg-teal-300', 'bg-lime-300', 'bg-pink-300', 'bg-fuchsia-300', 'bg-primary-300']

    function randomSize(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function randomColor() {
        const randomIdx = Math.floor(Math.random() * colorArr.length);
        const selectedColor = colorArr.splice(randomIdx, 1)[0];
        return selectedColor;
    }

    return (
        <main className='w-full h-screen bg-cover relative overflow-hidden'>
            <div className="w-3/4 mx-auto h-full">
                <div className="relative md:top-[64px] top-[68px]">
                    <div className={`main_bg hover:scale-125 z-30 transition-all absolute duration-500 translate-y-1/2 rounded-3xl ${randomColor()} opacity-60`}
                        style={{ height: `${randomSize(10, 50)}vh`, width: `${randomSize(15, 25)}vw` }} />
                    <div className={`main_bg hover:scale-110 z-20 transition-all absolute duration-500 translate-x-1/4 translate-y-1/4 rounded-full ${randomColor()} opacity-70`}
                        style={{ height: `${randomSize(30, 40)}vh`, width: `${randomSize(30, 40)}vw` }} />
                    <div className={`main_bg hover:scale-110 z-10 transition-all absolute duration-500 translate-x-1/2 translate-y-1/3 rounded-full ${randomColor()} opacity-70`}
                        style={{ height: `${randomSize(40, 45)}vh`, width: `${randomSize(50, 60)}vw` }} />
                </div>

                <div className="container text-left relative top-[44vh] z-40">
                    <h2 className="w-full text-4xl font-bold text-slate-800 leading-10 relative z-50 tracking-wider
                    md:text-5xl md:font-extrabold md:leading-[74px]
                    lg:text-6xl lg:font-extrabold lg:leading-[92px]
                    transition-all duration-200">안녕하세요!<br />
                        <span id="txtSpan" />
                        <p className='inline-block align-middle
                            h-10 
                            md:h-14
                            lg:h-16 w-1 bg-black opacity-70 animate-cursor' />
                        <br />
                        김성우 입니다.</h2>
                    <p className="w-full text-lg leading-7 relative z-50 mt-8
                    md:text-xl md:leading-9
                    lg:text-2xl lg:leading-10">
                        확장성과 유지보수성을 갖춘 웹 애플리케이션을 개발하기 위해 노력하고 있습니다.</p>
                </div>

            </div>
        </main>
    )
}

export default Main
