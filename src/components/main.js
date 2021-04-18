import React from 'react';
import SubscribeComponent from "components/subscribe-letter"

const Main = ()=>{
		
	return(
		<>
			<SubscribeComponent/>
			<main id="main-section">	
				<div className="container">
					<div className="grid-main-section">

						<div className="r-wraps child-main">
							<h1>
								New York Times bestselling author
								David Wong's Zoey Punches the
								Future in the Dick
							</h1>

							<p>
								identifying wsshat holds you back, 
								you’re better able...
							</p>
							<p>
								holds you back,  you’re better able
								 you’re better able...
							</p>

							<div className="grid-two-columns" id="rating-sections">
								<div className="l-rate grid-child-rate">
									<span className="number-count">40+</span>
									<span>Motivational Videos Uploaded</span>
								</div>

								<div className="r-rate grid-child-rate">
									<span className="number-count">1.5k+</span>
									<span>Social Media Followers</span>
								</div>	
							</div>
						</div>

						<div className="l-wraps child-main">
							<img src="https://firebasestorage.googleapis.com/v0/b/aaron-dancel-site.appspot.com/o/IMG_5.jpg?alt=media&token=0693957f-91c4-497a-8f4e-660c2b672100" />
						</div>
						
					</div>
				</div>
			</main>
		</>
	)
}

export default Main;