import React from 'react';
import ReactDOM from 'react-dom';
import WaveSurfer from 'wavesurfer.js';
import Podcast from "static/audio/podcast.mp3"

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