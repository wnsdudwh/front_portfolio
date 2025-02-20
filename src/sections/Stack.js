import React from 'react'
import '../static/css/Stack.css';

const Stack = () => {
    return (
        <section id="stack" class="bg-primary-200 w-full h-full py-12">                       {/* stack 섹션의 전체 범위 */}
            <div class="lg:mx-auto w-full max-w-screen-2xl relative">                                {/* relactive로 여기 기준으로 위치 상속 + 패딩탑으로 제목영역 위치잡기 용이 */}
                <div class="font-extrabold text-6xl underline text-center mb-7">STACK</div>    {/* 제목 / 추후 왼쪽정렬 + 애니메이션 */}
                <div class="w-full">  {/* 아이템 2/2줄을 감쌀 div flex1 사용시 모바일 반응형 4->2->1개로 표시될거 고민좀 해야함 생각 중인건 기본 1, sm~md 2, lg:flex-1 생각중*/}
                    <div className='flex flex-wrap justify-center items-center gap-10'>
                        <div class="stack_bg hover:bg-green-300 bg-gray-200 rounded-lg min-w-60 max-w-60 w-full h-[300px]">
                            <div className='p-5 font-bold h-1/4'>
                                <h3>Language</h3>
                            </div>
                            <div className='h-3/4 flex flex-col justify-end pl-5 pb-5'>
                                <ul>
                                    <li className='border-b-2 border-gray-300 mr-5 mb-2'>조준영</li>
                                    <li className='border-b-2 border-gray-300 mr-5 mb-2'>2</li>
                                    <li className='border-b-2 border-gray-300 mr-5 mb-2'>3</li>
                                    <li className='border-b-2 border-gray-300 mr-5 mb-2'>4</li>
                                    <li className=''>5</li>
                                </ul>

                            </div>
                        </div>
                        <div class="stack_bg hover:bg-green-300 bg-gray-200 rounded-lg min-w-60 max-w-60 w-full h-[300px]">
                            <div className='p-5 font-bold h-1/4'>
                                <h3>Frontend</h3>
                            </div>
                            <div className='h-3/4 flex flex-col justify-end pl-5 pb-5'>
                                <ul>
                                    <li className='border-b-2 border-gray-300 mr-5 mb-2'>html</li>
                                    <li className='border-b-2 border-gray-300 mr-5 mb-2'>2</li>
                                    <li className='border-b-2 border-gray-300 mr-5 mb-2'>3</li>
                                    <li className=''>4</li>
                                </ul>

                            </div>
                        </div>
                        <div class="stack_bg hover:bg-green-300 bg-gray-200 rounded-lg min-w-60 max-w-60 w-full h-[300px]">
                            <div className='p-5 font-bold h-1/4'>
                                <h3>Backend</h3>
                            </div>
                            <div className='h-3/4 flex flex-col justify-end pl-5 pb-5'>
                                <ul>
                                    <li className='border-b-2 border-gray-300 mr-5 mb-2'>1</li>
                                    <li className='border-b-2 border-gray-300 mr-5 mb-2'>spring어쩌고</li>
                                    <li className=''>3</li>
                                </ul>

                            </div>
                        </div>
                        <div class="stack_bg hover:bg-green-300 bg-gray-200 rounded-lg min-w-60 max-w-60 w-full h-[300px]">
                            <div className='p-5 font-bold h-1/4'>
                                <h3>DevOps</h3>
                            </div>
                            <div className='h-3/4 flex flex-col justify-end pl-5 pb-5'>
                                <ul>
                                    <li className='border-b-2 border-gray-300 mr-5 mb-2'>1</li>
                                    <li className=''>ㅇㄴㅇㄹ</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stack