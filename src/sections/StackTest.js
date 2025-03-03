import Aos from 'aos';
import React, { useEffect } from 'react';
import data from '../component/Stack.json';
import '../static/css/Stack.css';
import "aos/dist/aos.css";

const StackTest = () => {

    const duration = ["1200", "1800", "700", "1500"];

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <section id="stack" className="bg-primary-300 relative">                       {/* stack 섹션의 전체 범위 */}
            <div className="lg:mx-auto max-w-screen-xl relative pb-20">       {/* relactive로 여기 기준으로 위치 상속 + 패딩탑으로 제목영역 위치잡기 용이 */}
                <div className="w-3/4 mx-auto font-extrabold text-5xl text-center lg:text-left py-16 text-[#212529]">STACK</div>    {/* 제목 / 추후 왼쪽정렬 + 애니메이션 */}
                {/* 아이템 2/2줄을 감쌀 div flex1 사용시 모바일 반응형 4->2->1개로 표시될거 고민좀 해야함 
                생각 중인건 기본 1, sm~md 2, lg:flex-1 생각중*/}
                <div className="flex flex-wrap justify-center gap-10">
                    {data && data.map((item) => (
                        // 452px -> 아래 projects가 2개->1개로 줄어들때 stack 컴포넌트도 같이 2개->1개로 줄어드는 픽셀 계산한 것
                        // 수정할 경우 mx값과 위 div의 gap 값도 수정해야 함
                        <div
                            key={item.index}
                            data-aos="fade-up"
                            data-aos-duration={duration[item.index-1]}
                            className=" h-[350px] 
                                        min-w-[75%] max-w-[452px] w-full
                                        max-[500px]:min-w-[80%]
                                        md:min-w-[40%] lg:min-h-[370px]
                                        xl:min-w-[20%] xl:max-w-[250px] xl:mx-4
                                        ">
                            <div key={item.index} id={item.title}
                                className=" bg-[#fcfcfc] hover:bg-[#63ffce] hover:!scale-[1.15] hover:!duration-300 transition-all
                                        flex flex-col p-8
                                        w-full h-full
                                        mx-6 xl:mx-4
                                        rounded-xl
                                        ">
                                <h3 className="text-3xl font-bold">{item.title}</h3>
                                <ul className='divide-y-[2px] divide-gray-300 mt-auto'>
                                    {item.content && item.content.map((i) => (
                                        <li key={i} class="py-2 text-lg">{i}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section >
    )
}

export default StackTest

