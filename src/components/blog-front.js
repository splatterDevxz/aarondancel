import React from "react"
import { Row, Col } from "antd"
import { Link } from "gatsby"
import HeartIcon from "../../static/icons/heart.svg"
import CommentIcon from "../../static/icons/comment.svg"
import Branding from "./branding"

const BlogFront = ()=>{
	return(
		<>	
			<section className="blog-front-section">
				<div className="container">
					<Row style=
						{{
							flexFlow : "row", 
							gap:"20px",
							transform : "translateY(-42%)"
						}}>

						<Col span={8} className="f-blog-intro gutter-row">
							<span>Aaron Dancel</span>
							<h5>	
								if you need more inspirtation
								check my blog
								<Link to="/blog">
								</Link>
							</h5>
						</Col>
						<Col span={8} className="blog-common gutter-row">
							<span>Published on December 2020</span>
							<h5>
								The Realizing Entrepreneur:
								Industry Game-Changer
							</h5>
							<nav className="info-blog">
								<li>
									<img src={HeartIcon} alt="heart_icon"/>
									<span>10</span>
								</li>

								<li>
									<img src={CommentIcon} alt="heart_icon"/>
									<span>20</span>
								</li>
							</nav>
						</Col>
						<Col span={8} className="blog-common gutter-row">
							<span>Published on December 2020</span>
							<h5>
								The Realizing Entrepreneur:
								Industry Game-Changer
							</h5>
							<nav className="info-blog">
								<li>
									<img src={HeartIcon} alt="heart_icon"/>
									<span>10</span>
								</li>

								<li>
									<img src={CommentIcon} alt="heart_icon"/>
									<span>20</span>
								</li>
							</nav>
						</Col>
					</Row>

					<Branding/>
					
				</div>
			</section>
		</>
	)
}

export default BlogFront