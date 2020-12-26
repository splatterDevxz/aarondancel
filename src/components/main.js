import React, {useState} from 'react';
import Slider from "./slider"
import firebase from "gatsby-plugin-firebase"


const Main = ()=>{

 	const [user, setUser] = useState();

	React.useEffect(()=>{
		
	},[firebase])

	return(
		<>
			<main id="main-section">
				<div className="container">
					<div className="grid-main-section">
						<div className="l-wraps child-main">
							<img src={'https://lh3.googleusercontent.com/GD9VY_G9H0dHZZpfigVyz_BScHCGK_nrWBN2VSpWr79hx6i4UZBvVFbs4Q3NSBKx0lDB-OtNVs_k9tx4KCWA9RO4v_nbgQphajR7EgQ4dbGqMvIIEIoqaL4ZxxQzL-VPG1T5L72o-8HoiWFniJCNq7vTEdHVcrBwHnPw9rLOAm_D3lgEDEiTrZ_2qpZTo4JYGQQmoOpSGvMtMqjUQTTZT4cCrtpFDGhUpHFDbHLJG7t15MWo0ZczECAhXlUAGXvgL-6NLx9OVuAoFIkPk9Ulw8ftncQR9QCJohFk4_eh85x39UMiXXfoT77ZDQMvEb4ENk1FUVXefOGyO7Y810gfX2Jph95WSjvllUjKSlkHY_iYgEBYiYR6dx9q_0LY0gzV0h9DoKIrCfNT-LuEYp9Nn85C2TWj_CTmjVA1H2IDNug1GH7RcBvPRyDNyvu9UzTDM-OLrJzOEApPUk8Oa6Mmt_lGTRP5he6JNtL7fkkxm4MxHaYH5RBrn7pIOX7cyeqPrvR4bSsauMKkATqjRH1gcJiSoqxdI35pUPMD0rFOqlAgp6QptZ4yD-lXwF_g67VOkS03FNl5IhuFoSIsd-d4VVDOeXQ9fUVUjqdki5FIKimOVU6oNyg8C4yVArQ47eH0_x6AbAuclcIXJ3lK1uEoVyEiPTK3ukjN_lsGHCbJ9KzjoZPZ9Los-_NaU9A=w978-h652-no?authuser=0'} />
						</div>

						<div className="r-wraps child-main">
							<h1>
								New York Times bestselling author
								David Wong's Zoey Punches the
								Future in the Dick
							</h1>

							<p>
								identifying what holds you back, 
								you’re better able...
							</p>
							<p>
								holds you back,  you’re better able
								 you’re better able...
							</p>

							<div className="grid-two-columns" id="rating-sections">
								<div className="l-rate grid-child-rate">
									<span className="number-count">40+</span>
									<span>Motivational Videos Uploaded</span>
								</div>

								<div className="r-rate grid-child-rate">
									<span className="number-count">1.5k+</span>
									<span>Social Media Followers</span>
								</div>	
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	)
}

export default Main;