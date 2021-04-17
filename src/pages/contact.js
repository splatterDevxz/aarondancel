import React from "react"
import Layout from "components/layout"
import BannerParallax from "components/parrallax-banner"

const Contact =()=>{
	return(
		<>
			<Layout>	
				<section id="contact-form-container">
					<div className="container">
						<div className="contact-info-wrapper">
							<h1>Contact Aaron Dancel</h1>
							<p>	
								To contact Aaron Dancel or his 
								staff directly, use the 
								following information
							</p>

							<div className="grid-two-columns" id="wrapper-container">

								<div className="grid-child-col l-col">
									<h1>General Inquiries</h1>
									<span>Email:talktome@aarondancel.com</span>
									<p>	
										Please note that JV proposals, 
										business deals and all correspondence
										must go to the email above.
									</p>
								</div>

								<div className="grid-child-col r-col">
									<h1>Mailing Address</h1>
									<div className="wraps-info">
										<span>Philippines</span>
										<p>608, 6F, Jesa-ITC Bldg. 
										Mango Avenue, Cebu City, 6000</p>
									</div>
								</div>
							</div>

							<section id="map-section">
								<iframe 
									src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15810.798699183706!2d123.89571804448278!3d10.310125989606492!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x88222e42ff75a13!2sInk%20Shared%20Solutions%2C%20Inc.!5e0!3m2!1sen!2sph!4v1605699055275!5m2!1sen!2sph" 
									width="100%" 
									height="450">
								</iframe>
							</section>
						</div>	
					</div>
				</section>	
			</Layout>
		</>
	)	
}		
		
export default Contact