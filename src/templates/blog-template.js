import React from "react"
import Layout from "components/layout"
import { graphql } from "gatsby"
import Thumbnail from "static/thumbnail/thumbnail.png"
import BannerParallax from "components/parrallax-banner"
import { DiscussionEmbed } from "disqus-react"


export const query = graphql`
	query($slug:String!){
		contentfulBlogPost (slug: {eq:$slug}){
			title
			published(formatString:"MMMM Do, YYYY")
			blogImage {
		      file {
		        url
		      }
		    }
			body{
				raw
			}
		}
	}
`
	
const BlogTemplate = (props)=>{

	const slug =(props.location.href);
	const disqusConfig = {
	  shortname: 'aaron-dancel',
	  config: { identifier:  12, slug}
	}
	
	const {title, published, body , blogImage} = (props.data.contentfulBlogPost);

	return(
		<>	
			<Layout>
				<div 
				  className="banner-parallax"
				  style={{
				  backgroundImage: `url(${blogImage.file.url})`,
				  height:'400px',
				  backgroundAttachment: 'fixed',
				  backgroundPosition: 'center',
				  backgroundRepeat: 'no-repeat',
				  backgroundSize: 'cover',
				  filter: 'grayscale(100%)'
				}}>

					<div classNam="container">
						<h1>
							{title}
						</h1>
					</div>

				</div>
				<section className="single-blog">
					<div className="container">

						<div className="thumbnail-container">
							<img src={Thumbnail} alt="thumbnail"/>
							<div className="auth-name">
								<span>Aaron</span>
								<span>Dancel</span>
							</div>

							<div className="published-on">
								<span>Pubished On:</span>
								<span className="published">{published}</span>
							</div>
						</div>

			
						<p>
							Lorem Ipsum is simply dummy text of the 
							printing and typesetting industry. Lorem 
							Ipsum has been the industry's standard 
							dummy text ever since the 1500s, when an 
							unknown printer took a galley of type and 
							scrambled it to make a type specimen book. 
							It has survived not only five centuries
							dummy text ever since the 1500s, when an 
							unknown printer took a galley of type and 
							scrambled it to make a type specimen book. 
							It has survived not only five centuries
						</p>

						<p>
							It has survived not only five centuries
							dummy text ever since the 1500s, when an 
							unknown printer took a galley of type and 
							scrambled it to make a type specimen book. 
							It has survived not only five centuries
						</p>
						
						<p>
							Lorem Ipsum is simply dummy text of the 
							printing and typesetting industry. Lorem 
							Ipsum has been the industry's standard 
							dummy text ever since the 1500s, when an 
							unknown printer took a galley of type and 
							scrambled it to make a type specimen book. 
							It has survived not only five centuries
							dummy text ever since the 1500s, when an 
							unknown printer took a galley of type and 
							scrambled it to make a type specimen book. 
							It has survived not only five centuries
						</p>
					</div>
				</section>

				<div className="commentSection container">
					<DiscussionEmbed {...disqusConfig} />
				</div>

			</Layout>
		</>
	)
}

export default BlogTemplate
