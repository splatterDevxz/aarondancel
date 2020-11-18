import React from "react"
import { Parallax, Background } from 'react-parallax'

const PB =()=>{
	return(
		<>	
			<section className="banner-section">
            	<Parallax 
	                bgImageAlt="banner_img"
	                strength={300}
	                bgImage={require('../../static/images/banner_img.jpg')}>
	            </Parallax>
	        </section>
		</>
	)
}

export default PB;