import React from 'react'

const Footer = () => {
    return (
        <footer className="border-slate-500 border-t-[1px] w-full bg-slate-50" id="footer">
        <div className="max-w-screen-lg mx-auto h-[100px] md:h-[110px] flex flex-col justify-center items-start">
          <div className="font-normal text-gray-700 text-base flex gap-0.5 flex-col">
            <div className="inline-block px-1"><a className="hover:underline" href="mailto:dhdhwnsdud1@naver.com" target="_blank" aria-label="이메일 주소 : dhdhwnsdud1@naver.com">dhdhwnsdud1@naver.com</a></div>
            <div className="inline-block px-1"><a className="hover:underline" href="https://github.com/wnsdudwh" target="_blank" aria-label="깃허브 주소 : https://github.com/wnsdudwh">https://github.com/wnsdudwh</a></div>
          </div>
          <div className="w-full font-normal text-gray-500 text-sm flex justify-end">© 2025 Jo Jun Yeong, Kim Seong Woo. All rights reserved.</div>
        </div>
      </footer>
    )
}

export default Footer
