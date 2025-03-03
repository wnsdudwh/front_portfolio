import React from 'react'
import '../static/css/Main.css';
import '../static/js/text_iife.js';

const Main = () => {

    return (
        <main className='w-full h-screen bg-cover relative overflow-hidden'>
            <div class="w-3/4 mx-auto h-full">
                <div class="main_bg relative">
                    <div class="hover:scale-105 transition-all absolute duration-300 right-1/2  h-1/2 w-1/4 rounded-full bg-red-300 opacity-60 blur-3xl"></div>
                    <div class="hover:scale-110 transition-all absolute duration-300 right-1/3  h-1/2 w-1/4 rounded-full bg-blue-300 opacity-70 blur-3xl"></div>
                    <div class="hover:scale-125 transition-all absolute duration-300 right-1/4  h-[30vh] w-[30vw] rounded-full bg-green-300 opacity-70 blur-3xl"></div>
                </div>

                <div class="container text-left relative top-[44vh]">
                    {/* <h4>안녕하세요!</h4> */}
                    <h2 class="active w-full text-5xl font-bold leading-[60px] relative z-50
                    md:text-6xl md:font-extrabold md:leading-[74px]
                    lg:text-7xl lg:font-extrabold lg:leading-[92px]
                    transition-all duration-200">I`M A<br /><span></span></h2>
                    <p class="w-full text-lg leading-[28px] relative z-50
                    md:text-xl md:leading-[36px]">안녕하세요. 저는 UIUX 디자인, 퍼블리싱 하는 2년 차 웹 디자이너 조준영입니다.
                    <br />저는 고객의 니즈에 맞는 디자인을 하고, 어떠한 사용자에게든 편리하고 좋은 웹 페이지를 만듭니다!</p>
                </div>

            </div>
        </main>
    )
}

export default Main
