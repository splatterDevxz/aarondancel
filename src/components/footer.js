import React from "react"
import {Row, Col} from "antd"
import {Link} from "gatsby"
import SocMed from "./social-media"
import Newsletter from "components/Forms/newsletter"


const Footer = ()=>{
	return(
		<>
			<section className="footer">
				<div className="container">
					<Row>
						<Col 
							className="footer-info-wraps"
							sm={24} md={24} lg={12} xl={12}
							style={{width:'50%'}}>
							<h5>Aaron Dancel</h5>
							<nav>
								<li key="my_story"><Link to="/my-story">My Story</Link></li>
								<li key="events"><Link to="/events">Events</Link></li>
								<li key="blog"><Link to="/blog">Blog</Link></li>
								<li key="contact"><Link to="/contact">Contact</Link></li>
							</nav>

							<div className="footer-soc-med-wrapper">
								<SocMed/>
								<div className="wr-credits">
									©  Syclla Creatives
								</div>
							</div>
						</Col>

						<Col 
							className="form-wrapper-ww"
							sm={24} md={24} lg={12} xl={12}
							style={{width:'50%'}}>
							<Newsletter/>
						</Col>
					</Row>
				</div>
			</section>
		</>
	)
}

export default Footer;