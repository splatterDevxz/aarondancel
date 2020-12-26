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
  					<iframe src="https://www.buzzsprout.com/1493704/6414094-the-virtualpreneur-with-ruben-licera?client_source=small_player&amp;iframe=true&amp;referrer=https://www.buzzsprout.com/1493704/6414094-the-virtualpreneur-with-ruben-licera.js?container_id=player-container-xxx&amp;player=small" width="100%" height="200" frameBorder="0" scrolling="no" title="Aaron Dancel's Podcast, The VirtualPreneur with Ruben Licera"></iframe>
			  	</div>
		    </div>
  		)
  	}
}


export default Audio;	