import React from "react"
import { Link } from "gatsby"
import Logo from "../../static/logo/main_logo.svg"

const Navigation = ()=>{

	const LinkList = [
		'my-story',
		'podcast',
		'events',
		'videos',
		'blog',
		'contact'
	]

	return(
		<>
			<div className="container">
				<nav id="navigation">
					<div className="grid-two-columns">
						
						<div>	
							<h1>
								<a href="/">
									<img 
										id="main-logo"
										src={Logo}
										alt="main_logo"
									/>
								</a>
							</h1>
						</div>

						<ul>
							{
								LinkList.map((link, indx)=>(
									<li>
										<Link 
										to={`/${link}`} 
										style={{textTransform:"capitalize"}}>
											{link.replace('-', '')}
										</Link>
									</li>
								))
							}
						</ul>
					</div>
				</nav>
			</div>
		</>		
	)
}


export default Navigation