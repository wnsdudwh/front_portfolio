import React from 'react';
import { HiOutlineXMark } from "react-icons/hi2";

const ModalComp = ({ open, setOpen, content }) => {
    const handleClose = () => setOpen(false);
    return (
        <>
            <div className={open ? `block absolute` : `none`}>
                <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-35'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white
                    w-4/5 h-3/4 max-w-[90vw] max-h-[90vh]
                    flex flex-col'>
                        <HiOutlineXMark onClick={handleClose} className='min-w-7 min-h-7 cursor-pointer ml-auto m-4' />
                        <div className='px-8 py-4 w-full h-full overflow-auto'>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ModalComp
