import React from "react"
import { Row, Col} from "antd"
import ReactPlayer from 'react-player/lazy'

const VideoPlayer = ({
    videoContents
})=>{
    
	const [isReady, trigerFunc] = React.useState(false);

	const doesReady =(callback)=>{
		if(callback){
			return trigerFunc(true)
		}
    }

    return (

        <>

            <div id="sub-content-videos">
                <Row 
                    gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                        { 
                            videoContents.map((vid, indx)=>{
                                return(
                                    <Col 
                                        key={indx}
                                        xl={12} lg={12} md={12} sm={24}  xs={24}
                                        className={`video-key-${indx}`}
                                        style={{marginBottom:'10%'}}
                                    >
                                        <ReactPlayer 
                                            className="react-player"
                                            url={vid.link} 
                                            width="100%"
                                            height="100%"
                                            onReady={(e)=>doesReady(e)}
                                        />

                                        <div className="wrapper-contents">
                                            <h5>{vid.title}</h5>
                                            <span style={{color: '#afafafee'}}>
                                                By: Aaaron Dancel
                                            </span>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                </Row>			
			</div>
        </>
    )
}


export default VideoPlayer