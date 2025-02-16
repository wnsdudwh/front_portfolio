import React from 'react'

const Footer = () => {
    return (
        <footer class="border-slate-500 border-t-[1px] w-full bg-slate-50" id="footer">
        <div class="max-w-8xl mx-auto h-[100px] md:h-[110px] flex flex-col justify-center items-start">
          <div class="font-normal text-gray-700 text-base flex gap-0.5 flex-col">
            <div class="relative inline-block px-1"><a class="hover:underline" href="mailto:dhdhwnsdud1@naver.com" target="_blank" aria-label="이메일 주소 : dhdhwnsdud1@naver.com">dhdhwnsdud1@naver.com</a></div>
            <div class="relative inline-block px-1"><a class="hover:underline" href="https://github.com/dhdhwnsdud1" target="_blank" aria-label="깃허브 주소 : https://github.com/dhdhwnsdud1">https://github.com/dhdhwnsdud1</a></div>
          </div>
          <div class="w-full font-normal text-gray-500 text-sm flex justify-end">© 2025 Jo Jun Yeong, Kim Seong Woo. All rights reserved.</div>
        </div>
      </footer>
    )
}

export default Footer
