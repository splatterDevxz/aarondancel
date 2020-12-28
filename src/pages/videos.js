import React from "react"
import Layout from "components/layout"
import { Row, Col} from "antd"
import YoutubePlayer from "components/Player/video-player"


const VideoPage = ()=>{

    const linksVideo =[
		{title:'The Meeting Mentality', link:"https://www.youtube.com/watch?v=iDYXaF668pM"},
		{title:"Don't let people kill your Vision", link:"https://www.youtube.com/watch?v=OfLPQm7s3KU"},
		{title:'How to maintain focus in your business', link:"https://www.youtube.com/watch?v=MIMhgluOKI4"},
		{title:'What Should Expect First Before Profit', link:"https://youtu.be/2fg0aCyjDCQ"},
		{title:'How To Treat Business', link:"https://youtu.be/Rcg637V_Szc"},
		{title:'How Entrepreneurs Should Use Social Media', link:"https://youtu.be/ETddHujvzLs"},
		{title:'The best form of marketing', link:"https://www.youtube.com/watch?v=c4w4bX6ZlJs"},
		{title:'Misconception Money', link:"https://www.youtube.com/watch?v=VP0xJufYYXs"},
		{title:'Capital for business', link:"https://www.youtube.com/watch?v=7oapQLuJQpw"},
		{title:'HOW TO USE CREDIT CARDS TO YOUR ADVANTAGE', link:"https://www.youtube.com/watch?v=9MX4ABzRFvQ"},
	]

    return (
        <>
            <Layout>
                <section id="events-page">
					<div className="container">

						<h2 className="stroke-heading">Videos</h2>

						<h1 id="event-heading">
							<span className="sub-heading">Videos | Aaron Dancel</span>
							No upcoming events, for now.
							I give talks and workshops about
							JavaScript and Web topics - Performance, 
							Progressive Web Apps, Project Fugu, Firebase, 
							and others. You can send me an email if you want 
							me to share about those topics in your event. Cheers!
						</h1>

                        <YoutubePlayer  
                            videoContents={linksVideo}
                        />
                            
                    </div>
				</section>
            </Layout>
        </>
    )
}

export default VideoPage