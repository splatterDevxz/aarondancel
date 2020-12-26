import React, {useState } from "react"
import { Row,Col } from "antd"
import ReactPlayer from 'react-player/lazy'

const LowerMain = ()=>{

	const videoContents =[
		{title:'What Should Expect First Before Profit', link:"https://youtu.be/2fg0aCyjDCQ"},
		{title:'How To Treat Business', link:"https://youtu.be/Rcg637V_Szc"},
		{title:'How Entrepreneurs Should Use Social Media', link:"https://youtu.be/ETddHujvzLs"},
	]

	 const [isReady, trigerFunc] = useState(false);

	const doesReady =(callback)=>{
		if(callback){
			return trigerFunc(true)
		}
	}


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


					<div id="sub-content-videos">
						<Row 
							style={{
								flexFlow : "row", 
								gap:"22px",
								transform: 'translateX(-21px)'
							}}>

								<>	
									{
										videoContents.map((vid, indx)=>{
											return(
												<Col 
													key={indx}
													span={8} 
													className={`video-key-${indx}`}
												>
													<ReactPlayer 
														className="react-player"
														url={vid.link} 
														width="100%"
														height="100%"
														onReady={(e)=>doesReady(e)}
													/>

													<div className="wrapper-contents">
														<h5>{vid.title}</h5>
														<span>By: Aaaron Dancel</span>
													</div>
												</Col>
											)
										})
									}
							</>	
						
						</Row>			
					</div>
				</div>
			</section>
		</>
	)
}
		
export default LowerMain;