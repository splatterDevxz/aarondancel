import React, {useEffect,} from "react"
import Layout from "components/layout"
import PodcastItem from "containers/wavesurfer"
import {Helmet} from "react-helmet";
import Info from "components/question"

const Podcast = ()=>{
	return(
		<>
			<Layout>
				<section id="podcast-page">
					<div className="container">

						<h2 className="stroke-heading">Podcast</h2>

						<h1 id="podcast-heading">
							<span className="sub-heading">Podcast | Aaron Dancel</span>
							This is essentially a curated list of
							content sources for people interested in Entrepreneurship.
						</h1>

						<PodcastItem/>
					</div>
				</section>

				<Info/>
			</Layout>
		</>
	)
}

export default Podcast