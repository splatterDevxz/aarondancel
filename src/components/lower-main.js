import React, {useState } from "react"
import { Row,Col } from "antd"
import ReactPlayer from 'react-player/lazy'
import YoutubePlayer from "components/Player/video-player"

const LowerMain = ()=>{

	const linksVideo =[
		{title:'What Should Expect First Before Profit', link:"https://youtu.be/2fg0aCyjDCQ"},
		{title:'How To Treat Business', link:"https://youtu.be/Rcg637V_Szc"},
		{title:'How Entrepreneurs Should Use Social Media', link:"https://youtu.be/ETddHujvzLs"},
	]

	
	return(
		<>
			<section className="lower-main-section">
				<div className="container">
					
					<h1  className="heading-lower-content">
						What I Love to do
					</h1>

					<Row>				
						<Col span={12} className="video-content">
							<h1>
								New York Times bestselling
								author David Wong's Zoey
								Punches the Future
							</h1>

							<p>
								Lorem Ipsum is simply dummy text of 
								the printing and typesetting industry. 
								Lorem Ipsum has been the industry's standard dummy 
								text ever since the 1500s, when an unknown printer 
								took a galley of type and scrambled it to make a
								type specimen book.
							</p>
						</Col>

						<Col span={12}  className="video-wrapper">
							<ReactPlayer 
								className="react-player"
								url='https://www.youtube.com/embed/eDDL0eP1ktA' 
								width="100%"
								height="100%"
								playIcon
							/>
						</Col>
					</Row>
				</div>	
			</section>
		</>
	)
}
		
export default LowerMain;