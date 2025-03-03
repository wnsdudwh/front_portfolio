import React from 'react'
import '../static/css/Stack.css';


// 조준영 작성
const Stack = () => {
    return (
        <section id="stack" class="bg-primary-200 w-full h-[70vh]">                       {/* stack 섹션의 전체 범위 */}
            <div class="lg:mx-auto max-w-screen-2xl relative flex flex-col h-full">       {/* relactive로 여기 기준으로 위치 상속 + 패딩탑으로 제목영역 위치잡기 용이 */}
                <div class="w-full font-extrabold text-6xl underline text-center py-16">STACK</div>    {/* 제목 / 추후 왼쪽정렬 + 애니메이션 */}

                <div class="flex flex-wrap justify-center items-center w-full gap-14 h-3/5">  {/* 아이템 2/2줄을 감쌀 div flex1 사용시 모바일 반응형 4->2->1개로 표시될거 고민좀 해야함 생각 중인건 기본 1, sm~md 2, lg:flex-1 생각중*/}
                    <div class="stack_bg flex-1 w-1/4 rounded-xl p-8">
                        <div class="flex justify-between items-start mb-8">
                            <h3 class="text-3xl font-bold">Language</h3>
                        </div>
                        <ul>
                            <li class="stack_li py-2 text-lg">Java</li>
                            <li class="stack_li py-2 text-lg">JavaScript</li>
                            <li class="stack_li py-2 text-lg">PHdddP</li>
                        </ul>
                    </div>

                    <div class="stack_bg flex-1 w-1/4 rounded-xl p-8">
                        <div class="flex justify-between items-start mb-8">
                            <h3 class="text-3xl font-bold">Frontend</h3>
                        </div>
                        <ul>
                            <li class="stack_li py-2 text-lg">HTML5 / CSS</li>
                            <li class="stack_li py-2 text-lg">React</li>
                            <li class="stack_li py-2 text-lg">Tailwind CSS</li>
                            <li class="stack_li py-2 text-lg">Bootstrap</li>
                            <li class="stack_li py-2 text-lg">jQuery</li>
                        </ul>
                    </div>

                    <div class="stack_bg flex-1 w-1/4 rounded-xl p-8">
                        <div class="flex justify-between items-start mb-8">
                            <h3 class="text-3xl font-bold">Backend</h3>
                        </div>
                        <ul>
                            <li class="stack_li py-2 text-lg">MySQL</li>
                            <li class="stack_li py-2 text-lg">SpringBoot</li>
                            <li class="stack_li py-2 text-lg">JSP</li>
                        </ul>
                    </div>

                    <div class="stack_bg flex-1 w-1/4 rounded-xl p-8">
                        <div class="flex justify-between items-start mb-8">
                            <h3 class="text-3xl font-bold">DevOps</h3>
                        </div>
                        <ul>
                            <li class="stack_li py-2 text-lg">AWS</li>
                            <li class="stack_li py-2 text-lg">Git</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stack