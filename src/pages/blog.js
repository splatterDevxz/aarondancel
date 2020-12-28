import React from "react"
import Layout from "components/layout"
import { graphql } from "gatsby"
import moment from 'moment'
import {Link} from "gatsby"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export const query = graphql`
  {
    allContentfulBlogPost {
      nodes {
        title
        published
        slug
        blogImage {
          file {
            url
          }
        }
      }	
    }
  }
`

const Blog = ({data})=>{

	const blogPost = (data.allContentfulBlogPost.nodes);

	return(
		<>
			<Layout>
				 <section className="blog-section">
				 	<div className="container">

				 		<h2 className="stroke-heading">Blog</h2>
				 		
				 		<h1 id="blog-heading">
							<span className="sub-heading">Blog Post | Aaron Dancel</span>
							No upcoming events, for now. 
							I give talks and workshops about
							JavaScript and Web topics - Performance, 
							Progressive Web Apps, Project Fugu, Firebase, 
							and others. You can send me an email if you want 
							me to share about those topics in your event. Cheers!
						</h1>

						<div id="blog-wrapper">
					 		{
					 			blogPost.map((blog, indx)=>{
					 				return(
					 					<div className="blog-grid-parent">
					 						<div className="blog-child-elem blog_image_cont">
					 							<img src={blog.blogImage.file.url} alt="blog_img"/>
					 						</div>

					 						<div className="blog-child-elem content_elem">
					 							 <span className="date-published">Published At : {moment(blog.published).format('MM-DD-YYYY')}</span>
					 						 	<h1>{blog.title}</h1>

												<span style={{
													color: '#eeeeeede',
													fontStyle:'italic',
													letterSpacing: '1px'
												}}>
													By: Aaaron Dancel
												</span>

					 						 	<Link className="link-to" to={`/blog/${blog.slug}`}>
					 						 		Read More
					 						 	</Link>
					 						</div>
					 					</div>
					 				)
					 			})
					 		}
				 		</div>
				 	</div>
				 </section>
			</Layout>
		</>
	)
}


export default Blog