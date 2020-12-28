import React from "react"
import Layout from "components/layout"
import { graphql } from "gatsby"
import Thumbnail from "static/thumbnail/thumbnail.png"
import BannerParallax from "components/parrallax-banner"
import { DiscussionEmbed } from "disqus-react"
import { BLOCKS} from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

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

					<div 
						style={{
							background: '#000000ab',
							height: '400px'
						}}>
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
						
						{
							documentToReactComponents(JSON.parse(body.raw), options)
						}
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
