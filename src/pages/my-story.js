import React from "react"
import Layout from "components/layout"
import Aaron from "static/images/aaron_dancel.png"
import { graphql } from "gatsby"
import { BLOCKS} from '@contentful/rich-text-types';
import {LoadingOutlined} from "@ant-design/icons"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import firebase from "gatsby-plugin-firebase"
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

	const [content, setContentState] = React.useState(null);
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

		//
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
								{
									!!data.contentfulAboutTheAuthor ? (
										<>
											<h1>
												<span className="sub-heading">My Story | Aaron Dancel</span>
												{title}
											</h1>

											{
												documentToReactComponents(JSON.parse(bio.raw), options)
											}

											<div className="heading-foot-note">
												<h1>
													<span>Aaron Dancel</span>
													<span>Ramen CEO</span>
												</h1>
											</div>
										</>
									) :(
										<>
											<h1>Fetching</h1>	
										</>
									)
								}
								
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