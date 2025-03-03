// 불필요한 React import를 제거하고 useEffect와 useRef만 import
import { CiCalendarDate, CiMail, CiPhone, CiUser } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import GsapText from '../component/GsapText.js';
import '../static/css/Gsap_text.css';


const AboutMe = () => {
    return (
        // text-gray-700 opacity-40
        <section class="w-full relative h-fit border-b-indigo-600" id="about">
            <GsapText inputText={"ABOUT ME"} />
            <div class="w-full max-w-8xl mx-auto h-full">
                <div class="sm:px-12 py-20 flex-col justify-center items-center">
                    <div class="w-3/4 mx-auto text-5xl text-[#212529] font-extrabold mb-24 text-left">
                        ABOUT ME
                    </div>
                    <div class="flex flex-wrap w-3/4 mx-auto text-slate-800">
                        <div class="w-full sm:w-1/2 lg:w-1/3">
                            <div class="w-full pb-6 flex justify-start items-center gap-6 lg:pb-9">
                                <CiUser class="min-w-10 min-h-10" />
                                <div>
                                    <div class="font-bold">이름</div>
                                    <div>조준영</div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full sm:w-1/2 lg:w-1/3">
                            <div class="w-full pb-6 flex justify-start items-center gap-6 lg:pb-9">
                                <CiCalendarDate class="min-w-10 min-h-10" />
                                <div>
                                    <div class="font-bold">생년월일</div>
                                    <div>1996. 12. 11</div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full sm:w-1/2 lg:w-1/3">
                            <div class="w-full pb-6 flex justify-start items-center gap-6 lg:pb-9">
                                <CiPhone class="min-w-10 min-h-10" />
                                <div>
                                    <div class="font-bold">연락처</div>
                                    <div>010-9876-5432</div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full sm:w-1/2 lg:w-1/3">
                            <div class="w-full pb-6 flex justify-start items-center gap-6 lg:pb-9">
                                <CiMail class="min-w-10 min-h-10" />
                                <div class="group">
                                    <div class="font-bold">이메일</div>
                                    <div class="group-hover:underline">dhdhwnsdud1@naver.com</div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full sm:w-1/2 lg:w-1/3">
                            <div class="w-full pb-6 flex justify-start items-center gap-6 lg:pb-9">
                                <FaGithub class="min-w-10 min-h-10" />
                                <div class="group">
                                    <div class="font-bold">Github</div>
                                    <div><a href="https://github.com/wnsdudwh" class='group-hover:underline cursor-pointer'>wnsdudwh</a></div>
                                </div>
                            </div>
                        </div>

                        <div class="w-full sm:w-1/2 lg:w-1/3">
                            <div class="w-full pb-6 flex justify-start items-center gap-6 lg:pb-9">
                                {/* <FaGithub class="min-w-10 min-h-10" /> */}
                                <div>
                                    <div class="font-bold"></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section >
    )
}

export default AboutMe
