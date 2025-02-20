import React from 'react'
import data from '../component/Stack.json'

const StackTest = () => {
    return (
        <section id="stack" class="bg-primary-800">                       {/* stack 섹션의 전체 범위 */}
            <div class="lg:mx-auto max-w-screen-xl relative pb-16">       {/* relactive로 여기 기준으로 위치 상속 + 패딩탑으로 제목영역 위치잡기 용이 */}
                <div class="w-full font-extrabold text-6xl underline text-center py-16">STACK</div>    {/* 제목 / 추후 왼쪽정렬 + 애니메이션 */}
                {/* 아이템 2/2줄을 감쌀 div flex1 사용시 모바일 반응형 4->2->1개로 표시될거 고민좀 해야함 
                생각 중인건 기본 1, sm~md 2, lg:flex-1 생각중*/}
                <div class="flex flex-wrap justify-center gap-10">
                    {data && data.map((item) => (
                        // 452px -> 아래 projects가 2개->1개로 줄어들때 stack 컴포넌트도 같이 2개->1개로 줄어드는 픽셀 계산한 것
                        // 수정할 경우 mx값과 위 div의 gap 값도 수정해야 함
                        <div key={item.index}
                            class="bg-[#fcfcfc] hover:bg-[#63ffce] transition-colors duration-300 flex flex-col h-[350px] p-8
                            min-w-[452px] max-w-[452px] mx-6
                            max-[500px]:min-w-[280px]
                            xl:min-w-[250px] xl:max-w-[250px] xl:mx-4 rounded-xl">
                            <h3 class="text-3xl font-bold">{item.title}</h3>

                            <ul className='divide-y-[2px] divide-gray-300 mt-auto'>
                                {item.content && item.content.map((i) => (
                                    <li key={i} class="py-2 text-lg">{i}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    )
}

export default StackTest
