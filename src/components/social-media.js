import React from "react";
import {Link} from "gatsby"
import Fb from "../../static/icons/fb.svg"
import Insta from "../../static/icons/insta.svg"
import Linkden from "../../static/icons/linkden.svg"
import Tiktok from "../../static/icons/tiktok.svg"

const SocialMedia = ()=>{
	
	const icons = [Fb, Insta, Linkden, Tiktok]
	
	return (
		<>
			<div id="social-meadia">	
				{
					 icons.map((icon,index)=>{
					 	return(
					 		<span key={index}>	
								<Link to="">
									<img src={icon} alt="icons"/>
								</Link>
							</span>
					 	)
					 })
				}
			</div>
		</>
	)
}		

export default SocialMedia;