import React from 'react';
import ReactDOM from 'react-dom';

class Audio extends React.Component {
	constructor( props ){
		super(props);
		this.state = {
			activePlay : true,
			reload:false
		}
	}
			
  	render(){
  		return(	
  			<div className='container'>
  				<div className="wrapper-podcast-grid"> 
  					<div id="buzzsprout-player-6414094"></div>
			  	</div>
		    </div>
  		)
  	}
}


export default Audio;	