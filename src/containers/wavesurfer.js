import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";

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
  					<script src="https://www.buzzsprout.com/1493704/6414094-the-virtualpreneur-with-ruben-licera.js?container_id=buzzsprout-player-6414094&player=small" type="text/javascript" charset="utf-8"></script>
  					<div id="buzzsprout-player-6414094"></div>
			  	</div>
		    </div>
  		)
  	}
}


export default Audio;	