import React, {useEffect, useState} from 'react';
import PropTypes from "prop-types"
import Slider from "react-slick";

const SliderComponent = ({
	dataImages,
	customWidth,
	imageWidth,
}) =>{

	const [mobState, __functState] = useState(false);

	useEffect(() => {
    
	    window.addEventListener("resize", ()=>{ 
	        __functState(window.innerWidth <= 760);
	    });

	}, [mobState]);

	var settings = {
	    dots: true,
	    infinite: true,
	    speed: 1500,
	    slidesToShow: (mobState) ? 1 : 1,
	    slidesToScroll: 1,
	 };


	return(
		<>
			<section className="slider-section" style={customWidth}>
                <Slider {...settings} >
                    {
                        dataImages.map((link, i)=>{
                         
                            return (
                                <div className="photo-slider">
                                    <img 
                                    	style={imageWidth} 
                                    	src={link}
                                    	alt="image_slider"/>
                                </div>
                            )
                        })
                    }
                </Slider>
            </section>
		</>
	)
}

SliderComponent.propTypes ={
	dataImages : PropTypes.array,
	customWidth :PropTypes.object,
	imageWidth : PropTypes.object,
}

export default SliderComponent;