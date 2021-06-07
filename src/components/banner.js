import React from "react"
import VideoBanner from "../../static/video/banner.mp4"
import SocMed from "./social-media"

const Banner = () =>{
	return(
		<>
			<div className="grid-banner">
				<div className="heading-afro">
					<section id="name-auth-banr">
						<p>Ramen Ceo</p>
					</section>
					<h1>
						<span className="p-f-name">Push </span>
						<span> yourself</span>
						<span id="paragh-banr">
							because 
							no one else is going to
							do it for you.
						</span>
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