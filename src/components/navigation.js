import React, {useRef, useState} from 'react'
import { Link } from "gatsby"
import Logo from "../../static/logo/main_logo.svg"


const Navigation = ()=>{
	
	const refSpan  = useRef();
	const [toggle, setToggle] = useState(false);

	const linkList = [
		'my-story',
		'events',
		'videos',
		'blog',
		'contact'
	]

	let Listed = linkList.map((e) =>{
 		
		var newUrl = ((e).replace(/[ /]/g,"-").trim().toLowerCase());
		let filterUrl = (newUrl === 'home') ? '/' : newUrl;

		const res = e.replace(/[-/]/g," ").trim();
	
		return (
			<li>
				<Link 
					to={filterUrl}>
					{res}
				</Link>
			</li>
		)
	})
	
	const clickEvent  = (e)=>{
		setToggle(!toggle);
	}

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

						<ul id="nav-ul-list">
							{
								linkList.map((link, indx)=>(
									<li key={indx}>
										<Link 
										to={`/${link}`}
										style={{textTransform:"capitalize"}}>
											{link.replace('-', '')}
										</Link>
									</li>
								))
							}
						</ul>
						
						<ul id={toggle ? 'active-hamburger-nav': 'non-active-hamburger'}	
							onClick={e => clickEvent(e)}
							ref={refSpan}>
							<span className="hamburger-span"></span>
							<span className="hamburger-span"></span>
						</ul>
					</div>

					<section className={toggle ? 'active-nav': 'non-active-nav'}>
						<span className="close-mark" onClick={e => clickEvent(e)}>
								<span className="hamburger-x-mark"></span>
								<span className="hamburger-x-mark"></span>
						</span>


						<ul>
				
							<p className="list-label">
								Navigations.
							</p>

							{
								Listed
							}

						</ul>
					</section> 
				</nav>
			</div>
		</>		
	)
}


export default Navigation