import React from "react"
import { Link } from "gatsby"
import Aaron from "../../static/images/aaron_dancel.png"
import SocialMedia from "./social-media";

const Banner = () =>{
	return(
		<>
		    <div className="container">
				<div className="grid-banner">
					<div className="left-heading-wraps child-grid-wrapper">
						<h1>
							<span className="tagline-ft">Ramen Ceo</span>
							<span>
								Aaron
							</span>
							<span>
								Dancel
							</span>
						</h1>	

						<SocialMedia/>
						
						<div className="wrapper-img">
							<img src={Aaron} alt="aaron-dancel" />
						</div>
					</div>

					<div className="heading-wraps child-grid-wrapper">

						<span className="sub-contents">Motivational Speaker</span>
						<h1>
							Push yourself, because 
							no one else is going to
							do it for you.
						</h1>

						<p>
							identifying what holds you back, 
							you’re better able... holds you back, 
							you’re better able...
						</p>

						<span id="span-link">
							<Link href="/my-story">
								My Story
							</Link>
						</span>

					</div>
				</div>
			</div>
		</>
	)
}

export default Banner;