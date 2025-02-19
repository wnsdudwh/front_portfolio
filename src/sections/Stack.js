import React from 'react'
import '../static/css/Stack.css';

const Stack = () => {
    return (
        <section id="stack" class="bg-primary-200 w-full h-[600px]">                       {/* stack 섹션의 전체 범위 */}
            <div class="lg:mx-auto max-w-screen-2xl relative pt-12">                                {/* relactive로 여기 기준으로 위치 상속 + 패딩탑으로 제목영역 위치잡기 용이 */}
                <div class="font-extrabold text-6xl underline text-center mb-7">STACK</div>    {/* 제목 / 추후 왼쪽정렬 + 애니메이션 */}

                <div class="flex flex-wrap justify-center items-center w-full gap-14">  {/* 아이템 2/2줄을 감쌀 div flex1 사용시 모바일 반응형 4->2->1개로 표시될거 고민좀 해야함 생각 중인건 기본 1, sm~md 2, lg:flex-1 생각중*/}
                    <div class="stack_bg flex-1 w-1/4">
                        <div>
                            <h3>Language</h3>
                        </div>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JAVA</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>

                    <div class="stack_bg flex-1 w-1/4">
                        <div>
                            <h3>Frontend</h3>
                        </div>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>

                    <div class="stack_bg flex-1 w-1/4">
                        <div>
                            <h3>Backend</h3>
                        </div>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>

                    <div class="stack_bg flex-1 w-1/4">
                        <div>
                            <h3>DevOps</h3>
                        </div>
                        <ul>
                            <li>1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Stack