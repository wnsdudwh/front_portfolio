import React from 'react'
import { CiImageOn } from "react-icons/ci";
import { CiVideoOn } from "react-icons/ci";
import { LiaReadme } from "react-icons/lia";
import data from './Projects.json';

const ProjectComp = () => {

    // handle 어쩌고 함수들 => 모달창 여는 함수
    const handleReadme = () => {

    }

    const handleVideo = () => {

    }

    const handleImage = () => {

    }

    const colorList = ['bg-primary-600','bg-rose-600'];
    
    // const colorList = ['bg-primary-500','bg-pink-500','bg-red-400', 'bg-indigo-500', 'bg-green-400', 'bg-rose-400'];
    // const getRandom = () => {
    //     return Math.floor(Math.random() * colorList.length);
    // }
    return (
        <>
            {data && data.map(item => (
                <div key={item.index}>
                    <div class="p-8 w-[500px] h-[320px] rounded-xl mb-2 shadow-lg bg-white">
                        {/* <div class={`w-fit mb-2 px-5 py-1 ${colorList[getRandom()]} rounded-lg font-normal text-base text-white tracking-wide`}> */}
                        <div class={`w-fit mb-2 px-5 py-1 ${item.people === 1 ? colorList[0] : colorList[1]} rounded-lg font-normal text-base text-white tracking-wide`}>
                            {item.title}
                        </div>
                        <div class="w-fit text-sm my-1.5 text-gray-400 relative float-right top-[-31px]">
                            {item.date} ({item.people}人 프로젝트)
                        </div>
                        <div class="border-gray-200 border-y-[1px] hover:border-gray-900" id="border_hover"/>
                        <div class="font-semibold text-md my-1.5 text-gray-900">
                            {item.content}
                        </div>
                        <ul class="information pl-5 list-disc text-gray-700 text-sm">
                            {item.details && item.details.map(detail => (
                                <li key={detail}>{detail}</li>
                            ))
                            }
                        </ul>
                        <div class="text-primary-400 hover:underline mb-1.5 mt-3">
                            <a class="border-l-4 border-primary-500 pl-4" target='_blank' href={item.link}>{item.link}</a>
                        </div>
                        <div class="bg-orange-100 border-orange-200 border-2 rounded-lg w-fit px-3 py-0.5 my-3 mt-5 text-sm font-light text-gray-800">
                            {item.stack}
                        </div>
                        <div class="flex gap-2">
                            {item.readme &&
                                <div class="w-fit rounded-lg border-2 px-2 flex items-center gap-2 hover:bg-gray-300 text-base"
                                    onClick={handleReadme}>
                                    <LiaReadme />Readme
                                </div>}
                            {item.video &&
                                <div class="w-fit rounded-lg border-2 px-2 flex items-center gap-2 hover:bg-gray-300 text-base"
                                    onClick={handleVideo}>
                                    <CiVideoOn />동영상
                                </div>}
                            {item.image &&
                                <div class="w-fit rounded-lg border-2 px-2 flex items-center gap-2 hover:bg-gray-300 text-base"
                                    onClick={handleImage}>
                                    <CiImageOn />이미지
                                </div>}
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProjectComp
