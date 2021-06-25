import React from "react"


const Newsletter = ()=>{

	const onSubmitAction = ()=>{
	
	}

	return(
		<>
			<form id="newsletter-form" onSubmit={onSubmitAction}>
				<label>Newsletter</label>
				<input 
					type='text' 
					placeholder='Email'
					name='email' 
					className="inputStyles" />

				<input id="submit-button" 
					   type="submit" 
					   value="Submit"/>
			</form>
		</>
	)
}

export default Newsletter;