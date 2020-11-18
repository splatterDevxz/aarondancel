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
  					<div id="player-container-xxx"></div>
			  	</div>
		    </div>
  		)
  	}
}


export default Audio;	