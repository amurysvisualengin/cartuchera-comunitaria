import React from 'react'
import  "slick-carousel/slick/slick.css"

import  "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        spedd: 500,
        slidesToShow: 3.5,
        slidesToScroll:1
    }
    return (
        <Slider {...settings}>
            <div>
                <img src="https://www.losanimales.org/wp-content/uploads/2018/03/Perros.jpg" alt="" />
            </div>
            <div>
                <img src="https://www.losanimales.org/wp-content/uploads/2018/03/Perros.jpg" alt="" />
            </div>
            <div>
                <img src="https://www.losanimales.org/wp-content/uploads/2018/03/Perros.jpg" alt="" />
            </div>
            <div>
                <img src="https://www.losanimales.org/wp-content/uploads/2018/03/Perros.jpg" alt="" />
            </div>
            <div>
                <img src="https://www.losanimales.org/wp-content/uploads/2018/03/Perros.jpg" alt="" />
            </div>
            <div>
                <img src="https://www.losanimales.org/wp-content/uploads/2018/03/Perros.jpg" alt="" />
            </div>
        </Slider>
    )
}

export default Carousel
