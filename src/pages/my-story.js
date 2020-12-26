import React from "react"
import Layout from "components/layout"
import Aaron from "static/images/aaron_dancel.png"
import { graphql } from "gatsby"
import { BLOCKS} from '@contentful/rich-text-types';
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
	const [imageSrc, setImageState] = React.useState({data:[]});


	function displayImage(imageRef) {
		imageRef.getDownloadURL().then(function(url) {
		  imageSrc.data.push(url);
		}).catch(function(error) {
		  // Handle any errors
		});
	}

	React.useEffect(() => {
		 firebase.storage()
		.refFromURL('gs://aaron-dancel-site.appspot.com')
		.listAll()
		.then(res=>{
			 return res.items.forEach(function(imageRef) {
				// And finally display them
				return displayImage(imageRef);
			});
		})
	
		//
		return ()=>{
			return [];
		}
	}, [])	

	const options = {
		renderNode: {
		  [BLOCKS.PARAGRAPH]: (node, children) => (
			<p className={paragraphClass(node)}>{children}</p>
		  )
		}
	};
	 
	function paragraphClass(node) {
		const className = 'odd';
		//alternate logic for 'odd' | 'even'
		return className;
	}
	
	const {bio, title } =data.contentfulAboutTheAuthor;


	console.log(imageSrc);

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
										imageSrc.data.map((img, indx)=>{
											return(
												<>
													<LazyImage
														src={img} 
														altName="_aaron_dancel_photos"
													/>
												</>
											)
										})
										
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