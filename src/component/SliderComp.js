import React from 'react'
import Slider from "react-slick";

const SliderComp = ({ content }) => {
    // npm install react-slick
    // index.html의 <head>에 아래 css 추가
    /*
      <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    */
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const imgList = content && Array.isArray(content) && content.map(item => (
        <div key={item}>
            <img className='mx-auto w-1/2 h-1/2' src={`${item}`} alt=" " />
        </div>
    ))
    return (
        <div className='w-1/2 mx-auto'>
            <Slider {...settings}>
                {imgList}
            </Slider>
        </div>
    )
}

export default SliderComp