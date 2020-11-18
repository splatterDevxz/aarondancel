import React from "react"
import { Link } from "gatsby"


const Navigation = ()=>{


	return(
		<>
			<div className="container">
				<nav id="navigation">
					<div className="grid-two-columns">
						<div>	
							<h1>
								<a href="/">LOGO</a>
							</h1>
						</div>
						<ul>
							<li>
								<Link to="/my-story">My Story</Link>
							</li>
							<li>
								<a href="/podcast">Podcast</a>
							</li>
							<li>
								<Link to="/events">Events</Link>
							</li>
							<li>
								<Link to="/blog">Blog</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</>		
	)
}


export default Navigation