import React from 'react'
import '../static/css/Background.css';

const BackGround = () => {
    return (
        <section id="background" className="hidden sm:block 
        h-[120px] 
        sm:h-[130px] 
        md:h-[150px] 
        lg:h-[250px]">
            <div className="bg"></div>
        </section>
    )
}

export default BackGround