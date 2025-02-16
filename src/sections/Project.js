import React from 'react'
import ProjectComp from '../component/ProjectComp'
import '../static/css/Project.css';

const Project = () => {
    return (
        <section id="project" class="bg-slate-50 overflow-x-hidden">
            <div class="lg:mx-auto w-full relative pt-12">
                <div class="font-extrabold text-6xl underline text-center">PROJECTS</div>
                <div class="flex flex-wrap justify-center items-center w-full max-w-8xl mx-auto gap-10 py-14">
                    <ProjectComp />
                </div>
            </div>
        </section>
    )
}

export default Project
