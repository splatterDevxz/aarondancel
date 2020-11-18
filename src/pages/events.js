import React from "react"
import Layout from "components/layout"
import Info from "components/question"

const Events =()=>{

	const events= [
		{ head :"BookGini at Rise Conference", type: "talk", title:"Bookgini Web Conf",  date: "02/30/18", place:"Shanghai, Hong Kong"},
		{ head :"BookGini at Rise Conference", type: "talk", title:"Bookgini Web Conf",  date: "02/30/18", place:"Shanghai, Hong Kong"},
		{ head :"BookGini at Rise Conference", type: "talk", title:"Bookgini Web Conf",  date: "02/30/18", place:"Shanghai, Hong Kong"},
	]

	return(
		<>
			<Layout>
				<section id="events-page">
					<div className="container">

						<h2 className="stroke-heading">Events</h2>

						<h1 id="event-heading">
							<span className="sub-heading">events | Aaron Dancel</span>
							No upcoming events, for now.
							I give talks and workshops about
							JavaScript and Web topics - Performance, 
							Progressive Web Apps, Project Fugu, Firebase, 
							and others. You can send me an email if you want 
							me to share about those topics in your event. Cheers!
						</h1>

						<h1 id="heading-past-event">Past Events</h1>
						
						<div className="grid-row-events">
							{
								events.map((event, i)=>(
									<div className="grid-child event-child">
										<h1>{event.head}</h1>

										<span>{event.type}</span>
										<h5>{event.title}</h5>

										<ul className="event-footnote">
											<li>{event.date}</li>
											<li>{event.place}</li>
										</ul>
									</div>
									)	
								)
							}
						</div>

					</div>
				</section>

				<Info/>
			</Layout>
		</>
	)
}

export default Events