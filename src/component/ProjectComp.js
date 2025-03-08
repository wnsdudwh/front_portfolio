import React, { useEffect, useState } from 'react';
import { CiImageOn, CiVideoOn } from "react-icons/ci";
import { LiaReadme } from "react-icons/lia";
import ModalComp from './ModalComp';
import data from '../static/data/Projects.json';
import ProjectImageComp from './ProjectImageComp';

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm';
import 'github-markdown-css';

const ProjectComp = () => {
    const [open, setOpen] = useState(false);
    const [content, setContent] = useState('');

    // 리드미 모달
    function handleReadme(e) {
        fetch(e)
            .then((resp) => resp.text())
            .then((text) => setContent(<div className='markdown-body'>
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>
            </div>))
        setOpen(true);
    }

    // 비디오 모달
    function handleVideo(e) {
        const reg = /(.*?)(^|\/|v=)([a-z0-9_-]{11})(.*)?/i
        const vid = reg.exec(e)[3];
        setContent(
            <iframe width="100%" height="100%" src={`//www.youtube-nocookie.com/embed/${vid}?rel=0`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen="true"></iframe>
        );
        setOpen(true);
    }

    // 이미지 모달
    function handleImage(e) {
        setContent(
            <ProjectImageComp idx={e} />
        )
        setOpen(true);
    }

    const colorList = ['bg-primary-600', 'bg-rose-600'];

    // const colorList = ['bg-primary-500','bg-pink-500','bg-red-400', 'bg-indigo-500', 'bg-green-400', 'bg-rose-400'];
    // const getRandom = () => {
    //     return Math.floor(Math.random() * colorList.length);
    // }
    return (
        <>
            {data && data.sort((a, b) => a.index - b.index).map(item => (
                <div key={item.index}
                    data-aos={`${item.index % 2 == 0 ? "fade-left" : "fade-right"}`}
                    className={`${item.index % 2 == 0 ? "lg:mt-[160px]" : "lg:mb-[160px]"}`}>
                    <div className="p-8 w-[400px] lg:w-[500px] h-[320px] rounded-xl mb-2 shadow-lg bg-white">
                        {/* <div className={`w-fit mb-2 px-5 py-1 ${colorList[getRandom()]} rounded-lg font-normal text-base text-white tracking-wide`}> */}
                        <div className={`w-fit mb-2 px-5 py-1 ${item.people === 1 ? colorList[0] : colorList[1]} rounded-lg font-normal text-base text-white tracking-wide`}>
                            {item.title}
                        </div>
                        <div className="w-fit text-sm my-1.5 text-gray-400 relative float-right top-[-31px]">
                            {item.date} ({item.people}人 프로젝트)
                        </div>
                        <div className="border-gray-200 border-y-[1px] hover:border-gray-900" id="border_hover" />
                        <div className="font-semibold text-md my-1.5 text-gray-900">
                            {item.content}
                        </div>
                        <ul className="information pl-5 list-disc text-gray-700 text-sm">
                            {item.details && item.details.map(detail => (
                                <li className='mb-[2.5px]' key={detail}>{detail}</li>
                            ))
                            }
                        </ul>
                        <div className="text-primary-400 hover:underline mb-1.5 mt-3">
                            <a className="border-l-4 border-primary-500 pl-4" target='_blank' href={item.link}>{item.link}</a>
                        </div>
                        <div className="bg-orange-100 border-orange-200 border-2 rounded-lg w-fit px-3 py-0.5 my-3 mt-5 text-sm font-light text-gray-800">
                            {item.stack}
                        </div>
                        <div className="flex gap-2">
                            {item.readme &&
                                <div className="w-fit rounded-lg border-2 px-2 flex items-center gap-2 hover:bg-gray-300 text-base"
                                    onClick={() => { handleReadme(item.readme) }}>
                                    <LiaReadme />Readme
                                </div>}
                            {item.video &&
                                <div className="w-fit rounded-lg border-2 px-2 flex items-center gap-2 hover:bg-gray-300 text-base"
                                    onClick={() => { handleVideo(item.video) }}>
                                    <CiVideoOn />동영상
                                </div>}
                            {item.image &&
                                <div className="w-fit rounded-lg border-2 px-2 flex items-center gap-2 hover:bg-gray-300 text-base"
                                    onClick={() => { handleImage(item.index) }}>
                                    <CiImageOn />이미지
                                </div>}
                        </div>
                    </div>
                </div>
            ))}
            {open && <ModalComp open={open} setOpen={setOpen} content={content} />}
        </>
    )
}

export default ProjectComp
