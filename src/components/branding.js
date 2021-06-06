import React from "react";
import Stratton from "../../static/icons/stratton.svg"
import InkShared from "../../static/icons/inkshared.svg"
import Bookgini from "../../static/icons/bookgini.svg"
import v9Hub from "../../static/icons/v9.svg"
import NBC from "../../static/icons/nbc.svg"
import Rappler from "../../static/icons/rappler.svg"
import LinkMalloc from "../../static/icons/link_malloc.svg"
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
					}}
					id="row-1-brand-logo"
					>
					<Col 
						span={8} 
						className="logo-wrapper">
						<img src={Stratton} alt="stratton_img" />
					</Col>
					
					<Col 
						span={8} 
						className="logo-wrapper">
						<img 
							style={{ width: "100px"}}
							src={InkShared} alt="stratton_img" />
					</Col>

					<Col 
						span={8}
						className="logo-wrapper">
						<img src={Bookgini} alt="stratton_img" />
					</Col>
				</Row>

				<Row style=
					{{
						flexFlow : "row",
						gap:"20px",
						transform : "translateY(-50%)",
						textAlign : "center",
						alignItems : "center",
						justifyContent : "center",
						maxWidth :"590px",
						margin : "0 auto",
						paddingTop:"13%"
					}}
					id="row-2-brand-logo"
					>
					<Col span={8} className="logo-wrapper">
						<img
							style={{width:"160px"}} 
							src={v9Hub} alt="v9_hub" />
					</Col>
					
					<Col span={8} className="logo-wrapper">
						<img 
							style={{ width: "100px"}}
							src={NBC} alt="nbc_image" />
					</Col>

					<Col span={8} className="logo-wrapper">
						<img 
							style={{width: "100px"}}
							src={Rappler} alt="rappler_img" />
					</Col>	
					<Col span={8} className="logo-wrapper">
						<img 
							style={{width:"180px"}}
							src={LinkMalloc} alt="link_malloc_img" />
					</Col>	
				</Row>
			</div>
		</>
	)
}

export default Branding;