import React, { useState } from 'react'

const ProjectImageComp = () => {
    const [selectedImg, setSelectedImg] = useState(null);

    const imgArr = [
        'https://images.unsplash.com/photo-1592431454781-ec4870757ce9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
        'https://images.unsplash.com/photo-1593346279196-b971a8e46966?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1974&q=80',
        'https://images.unsplash.com/photo-1594884592479-1f5bad0b696d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2002&q=80',
    ]


    const changeImg = (x) => {
        setSelectedImg(imgArr[x]);
    }

    return (
        <div class="relative w-full h-full rounded-[10px] font-light text-base leading-normal text-[#303336] max-lg:w-full max-lg:h-auto">
            <div class="relative flex w-full h-full max-lg:flex-col">
                {/* <!-- 왼쪽 이미지 영역 --> */}
                <div class="relative w-[300px] h-full rounded-[10px] overflow-hidden bg-[#f6f6f6] max-lg:w-full max-lg:h-[300px]">
                    <img src={selectedImg ? selectedImg : imgArr[0]}
                        alt="Unsplash Image"
                        class="full_img w-full h-full object-cover object-center" />
                </div>
                {/* <!-- 오른쪽 내용 영역 --> */}
                <div class="relative w-[calc(100%-300px)] h-full pl-[35px] max-lg:w-full max-lg:h-auto max-lg:pl-0 max-lg:pt-[175px] max-[500px]:pt-[115px]">
                    {/* <!-- 태그 --> */}
                    <div class="relative left-full -translate-x-full w-fit py-[8px] px-[25px] rounded-[10px] bg-[#005AEE] max-lg:left-0 max-lg:translate-x-0">
                        <h6 class="text-white text-xs font-bold tracking-[2px]">LEISURE</h6>
                    </div>
                    <h2 className='text-4xl font-bold my-4'>제목</h2>
                    <p className='my-4 leading-normal'>It’s windy. The cool breeze of the lake. It gives, a sense of beauty, in motion. All is flowing, rushing and tide-And I sit in wonder, dreaming beside.</p>
                    {/* <!-- 미니 이미지들 --> */}
                    <div class="absolute flex bottom-0 h-[105px] max-lg:top-0 max-lg:mt-[35px] max-[500px]:mt-[20px] gap-4">
                        {imgArr.map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                alt="Unsplash Image"
                                onClick={() => { changeImg(index) }}
                                className="w-[105px] h-[105px] rounded-[10px] object-cover object-center cursor-pointer transition duration-300 hover:opacity-75 max-[500px]:w-[60px] max-[500px]:h-[60px]" />
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectImageComp
