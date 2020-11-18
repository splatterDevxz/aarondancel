import React from "react"
import { Row, Col} from "antd"


const Events = () =>{


	const EventList = [
		{date: 'January 01, 2020', name: "Events Title Heading 01"},
		{date: 'January 01, 2020', name: "Events Title Heading 02"},
		{date: 'January 01, 2020', name: "Events Title Heading 03"}
	]

	return(
		<>
			<div className="container">
				<Row>
					<Col className="events-heading">
						<h1>Events<span className="dot">.</span></h1>
						<p>Bringing lives for every filipinos</p>
					</Col>

					<Col className="events-info">
						<nav id="navlist-info">
						{
							 EventList.map((event, i)=>{
							 	return(
							 		<li key={i}>
							 			<span className="date">{event.date}</span>
							 			<span className="event-name">{event.name}</span>
							 		</li>	
							 	)
							 })
						}
						</nav>
					</Col>	
				</Row>
			</div>
		</>
	)
}

export default Events;