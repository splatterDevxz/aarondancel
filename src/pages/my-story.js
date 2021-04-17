import React from "react"
import Layout from "components/layout"
import Aaron from "static/images/aaron_dancel.png"
import { graphql } from "gatsby"
import { BLOCKS} from '@contentful/rich-text-types';
import {LoadingOutlined} from "@ant-design/icons"
import firebase from "gatsby-plugin-firebase"
import 'firebase/storage';
import LazyImage from  "components/Lazy/lazy-image"


export const query = graphql`
	query{
		contentfulAboutTheAuthor{
			id
			title
			bio {
				raw
			}
		}
	}
`

const MyStory =({data})=>{

	const [imageSrc, setImageState] = React.useState([]);


	React.useEffect(()=> {

		if(imageSrc.length <= 0){
			firebase.storage()
				.refFromURL('gs://aaron-dancel-site.appspot.com')
				.listAll()
				.then(res=>{
					return res.items.forEach(function(imageRef) {
						// And finally display them		
						imageRef
						.getDownloadURL()
						.then(res=>(setImageState((imageSrc)=>[...imageSrc , res])))

				});
			})

		}
		return ()=>{
			return [];
		}
	}, [imageSrc])	

	const options = {
		renderNode: {
		  [BLOCKS.PARAGRAPH]: (node, children) => (
			<p className={paragraphClass(node)}>{children}</p>
		  )
		}
	};
	 
	function paragraphClass(node){
		const className = 'odd';
		//alternate logic for 'odd' | 'even'
		return className;
	}

	const {bio, title } = data.contentfulAboutTheAuthor;

	return(		
		<>
			<Layout>
				<section className="my-story-section">
					<div className="container">
						<div className="two-grid-col">
							<div className="grid-child content-story">
								<h1>
									<span className="sub-heading">My Story | Aaron Dancel</span>
									I never dreamt of Success,
									I worked for it.
								</h1>

								<p>
									I'm the active CEO of Ink Shared Solutions, Inc. an Outsourcing company based Philippines.
									Co-Founder of Bookgini a Tech company in Singapore. 
									Co-Founder of Stratton Press Publishing an online publishing company in USA.
								</p>

								<p>
									I started as a simple, introverted boy from Leyte who dreamed of something better than what my lot in life could give
									me. It may not have been my fault for being born poor, but I was sure that if I’d get to the end of my life being the same,
									I’d have a lot of explaining to do when it’s time for me to meet my Maker. Thus, I decided to find my fortune in the big
									city, Cebu, and worked my way to college.
								</p>
								<p>
									To say that the heartaches and defeats that I’ve experienced can overwhelm a weaker man is an understatement. I’ve
									endured so much, yet learned as much. I focused on the lessons I’ve learned and came to a life-changing conclusion: in order for me to get the life I yearned for, I had to focus on Sales.
								</p>

								<p>
									I learned to sell my vision to partners who helped me get my business started. I sold my idea to my employees who
									aligned their focus with my own. I managed to get investors see things from my perspective and invest their confidence in me. I set up 4 thriving businesses, mentored successful employees, generated satisfied clients, and learned many
									valuable stuff, all while having my feet rooted firmly on the ground.
								</p>

								<p>
									Since it has always been my principle to show gratitude by paying it forward, I urge everyone to take this journey with me. I invite those who have the courage and humility to take the next step, to be better than who you were.
								</p>

								<div className="heading-foot-note">
									<h1>
										<span>Aaron Dancel</span>
										<span>Ramen CEO</span>
									</h1>
								</div>
							</div>

								<div className="grid-child">
									<div className="image_cont">
										<img src={Aaron} alt="__aaron_dancel"/>
									</div>

									<div className="photo-grid">
										{
											imageSrc.length > 0 ? (
												imageSrc.map((img, indx)=>{
													return(
														<>
															<LazyImage
																src={img} 
																altName="_aaron_dancel_photos"
															/>
														</>
														)
													})
												) : (
												<>
													<h1>Loading Images 
														<span style={{
															margin:"0 20px"
														}}>
															<LoadingOutlined/>
														</span>
													</h1>
												</>
											)
										}
									</div>
								</div>

							</div>
						</div>
				</section>
			</Layout>
		</>
	)
}

export default MyStory