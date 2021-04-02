import React from "react"
import VideoBanner from "../../static/video/banner.mp4"


const Banner = () =>{
	return(
		<>
			<div className="grid-banner">
				<video autoPlay loop muted id="myVideo">
					<source src={VideoBanner} type="video/mp4"></source>
					<source src={VideoBanner} type="video/ogg"></source>
				</video>
			</div>
		</>
	)
}

export default Banner;