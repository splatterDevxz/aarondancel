import React from "react"
import {Row, Col} from "antd"
import { Link } from "gatsby"
import Dancel from  "static/images/dancel.png"

const Question = ()=>{
	return(
		<>
			<section className="lower-ask-wrapper">
			 	<div className="container">
					<Row>
							
						<Col className="images-wraps">
							<img alt="aaron_dancel" src={Dancel}/>
						</Col>

						<Col className="wraps-head">
							<h1>
								If you have any 
								<span>Question</span>
							</h1>

							<p>
								Feel free to contact me.
							</p>

							<Link to="/contact">
								Lets talk
							</Link>

						</Col>
					</Row>
				</div>
			</section>
		</>
	)
}

export default Question