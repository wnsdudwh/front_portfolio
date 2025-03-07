import React from 'react';
import ProjectComp from '../component/ProjectComp';

const Project = () => {
    return (
        <section id="project" class="bg-slate-50 overflow-x-hidden relative">
            <div class="lg:max-w-8xl lg:mx-auto w-full relative pt-12">
                <div class="w-3/4 mx-auto font-extrabold text-5xl text-[#212529] text-center lg:text-left">PROJECTS</div>
                <div class="flex flex-wrap justify-center items-center w-full max-w-8xl mx-auto gap-10 py-14">
                    <ProjectComp />
                </div>
            </div>
        </section>
    )
}

export default Project
