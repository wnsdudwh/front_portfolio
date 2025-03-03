import { useEffect, useRef } from 'react'; // React가 17버전 이상일 경우, 기본적으로 JSX 변환이 되므로 React는 import할 필요 없음
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const GsapText = ({ inputText }) => {
    /* <div class="relative">
    <div id="gsap_about" className='absolute text-gray-300 opacity-20 right-0 -bottom-[0%] text-7xl font-bold
xl:rotate-90 xl:bottom-[15%] xl:-right-[6%] xl:text-7xl'>ABOUT ME</div>
</div> */
    useEffect(() => {
        gsap.to("#gsap_text", {
            backgroundSize: '100%', // 0%에서 100%로 애니메이션 진행
            ease: 'none',
            scrollTrigger: {
                trigger: "#about", // #about 요소가 트리거
                start: "center 80%", // start 위치 설정 - 화면 중앙기준 80%부터 시작
                end: "center 25%", // end 위치 설정 - 화면 중앙기준 50% 도달 시 끝
                scrub: true, // 스크롤에 맞춰 애니메이션 진행
            },
        });
    }, []);

    return (
        <div id="gsap_text" className="absolute text-gray-300 opacity-30 right-0 -bottom-[0%] text-5xl 
        sm:text-6xl lg:text-7xl font-bold lg:rotate-90 lg:bottom-[30%] lg:-right-[6%]
         2xl:bottom-[38%] 2xl:-right-[5%] 2xl:text-8xl">
            {inputText}
        </div>
    );
};

export default GsapText;