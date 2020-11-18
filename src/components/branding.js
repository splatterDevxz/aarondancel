import React from "react";
import Stratton from "../../static/icons/stratton.svg"
import InkShared from "../../static/icons/inkshared.svg"
import Bookgini from "../../static/icons/bookgini.svg"
import {Row, Col} from "antd"


const Branding = ()=>{
	return(
		<>
			<div className="branding"> 
				<h5>Company Working With</h5>
				<Row style=
					{{
						flexFlow : "row",
						gap:"20px",
						transform : "translateY(-50%)",
						textAlign : "center",
						alignItems : "center",
						justifyContent : "center",
						maxWidth :"750px",
						margin : "0 auto"
					}}>
					<Col span={8} className="logo-wrapper">
						<img src={Stratton} alt="stratton_img" />
					</Col>
					
					<Col span={8} className="logo-wrapper">
						<img 
							style={{ width: "100px"}}
							src={InkShared} alt="stratton_img" />
					</Col>

					<Col span={8} className="logo-wrapper">
						<img src={Bookgini} alt="stratton_img" />
					</Col>
				</Row>
			</div>
		</>
	)
}

export default Branding;