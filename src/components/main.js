import React from 'react';
import Slider from "./slider"

const Main = ()=>{


	 const tempoLinks = [
        'https://mcrichcanyoneering.com/wp-content/uploads/2020/01/Travelguycebu-Oslob-Whaleshark-4-300x300.jpg',
        'https://mcrichcanyoneering.com/wp-content/uploads/2020/01/kkday-2-300x300.jpg',
        'https://mcrichcanyoneering.com/wp-content/uploads/2020/01/moalboal-300x300.jpg',
        'https://mcrichcanyoneering.com/wp-content/uploads/2020/01/Sea-Turtles-300x300.jpg',
        'https://mcrichcanyoneering.com/wp-content/uploads/2020/01/Travelguycebu-Oslob-Whaleshark-3-1-300x300.jpg',
        'https://mcrichcanyoneering.com/wp-content/uploads/2020/01/Travelguycebu-Oslob-Whaleshark-2-1-300x300.jpg'
    ]


	return(
		<>
			<main id="main-section">
				<div className="container">
					<div className="grid-main-section">
						<div className="l-wraps child-main">
	
						</div>

						<div className="r-wraps child-main">
							<h1>
								New York Times bestselling author
								David Wong's Zoey Punches the
								Future in the Dick
							</h1>

							<p>
								identifying what holds you back, 
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
					</div>
				</div>
			</main>
		</>
	)
}

export default Main;