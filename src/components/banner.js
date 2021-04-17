import React from "react"
import VideoBanner from "../../static/video/banner.mp4"


const Banner = () =>{
	return(
		<>
			<div className="grid-banner">
				 <div className="heading-afro">
					<h1>
						Hustle
						<span style={{color:"#f71d1d"}}>.</span>
					</h1>
				 </div>
				<div id="backdrop-idle"></div>
				<video autoPlay loop muted id="myVideo">
					<source src={VideoBanner} type="video/mp4"></source>
					<source src={VideoBanner} type="video/ogg"></source>
				</video>
			</div>
		</>
	)
}

export default Banner;