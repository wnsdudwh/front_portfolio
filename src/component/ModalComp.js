import React, { useEffect } from 'react';
import { HiOutlineXMark } from "react-icons/hi2";

const ModalComp = ({ open, setOpen, content }) => {

    const handleClose = () => setOpen(false);
    
    // 모달 열린 경우 뒷 배경의 스크롤 방지
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [])

    return (
        <>
            <div className={open ? `block absolute z-50` : `none`}>
                <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-35'>
                    <div className='absolute rounded-lg top-[52%] left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white
                    w-full h-5/6 sm:w-4/5 sm:h-5/6
                    flex flex-col'>
                        <HiOutlineXMark onClick={handleClose} className='absolute right-0 min-w-7 min-h-7 cursor-pointer ml-auto m-4' />
                        <div className='px-12 py-4 w-full h-full overflow-auto scrollbar-hide'>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ModalComp
