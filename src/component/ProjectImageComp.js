import React, { useEffect, useState } from 'react'
import data from '../static/data/ProjectsImage.json'

const ProjectImageComp = ({ idx }) => {
    const [selectedImg, setSelectedImg] = useState(null);
    const [selectedData, setSelectedData] = useState(null);
    const [selectedIdx, setSelectedIdx] = useState(0);

    useEffect(() => {
        const project = data.projects.find((item) => item.index === idx);
        setSelectedData(project);

        if (project && project.images) {
            setSelectedImg(project.images[0]);
        }
    }, [idx])

    const changeImg = (x) => {
        setSelectedImg(selectedData.images[x]);
        setSelectedIdx(x);
    }

    return (
        <div className="relative w-full h-auto rounded-[10px] font-light text-base leading-normal text-[#303336] ">
            <div className="relative flex-col w-full h-full">
                {/* <!-- 큰 이미지 영역 --> */}
                <div className="relative w-full h-[300px] xl:h-[500px]">
                    <img src={selectedImg && selectedImg}
                        alt="Unsplash Image"
                        className='object-cover w-full h-full rounded-lg'
                    />
                </div>
                {/* <!-- 내용 영역 --> */}
                <div className="relative w-full h-auto pl-0 pt-[175px] max-[500px]:pt-[115px]">
                    {selectedData && (
                        <>
                            <div className="relative w-fit py-[8px] px-[25px] rounded-[10px] bg-[#005AEE] left-0 translate-x-0">
                                <h6 className="text-white text-xs font-bold tracking-[2px]">{selectedData.projectName}</h6>
                            </div>
                            <h2 className='text-4xl font-bold my-4'>{selectedData.title[selectedIdx]}</h2>
                            <p className='my-4 leading-normal'>{selectedData.descriptions[selectedIdx]}</p>
                            {/* <!-- 미니 이미지 영역 --> */}
                            <div className="absolute flex bottom-0 h-[105px] top-0 mt-[35px] max-[500px]:mt-[20px] gap-4" >
                                {selectedData.images.map((i, index) => (
                                    <img
                                        key={index}
                                        src={i}
                                        alt="Unsplash Image"
                                        onClick={() => { changeImg(index) }}
                                        className="w-[105px] h-[105px] rounded-[10px] object-cover object-center cursor-pointer 
                                        transition duration-300 hover:opacity-75 max-[500px]:w-[60px] max-[500px]:h-[60px]" />
                                ))
                                }
                            </div >
                        </>
                    )}
                </div>
            </div >
        </div >
    )
}

export default ProjectImageComp
