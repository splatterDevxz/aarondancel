import React from "react"
import {LoadingOutlined} from "@ant-design/icons"

const LazyImage = ({ 
    src, 
    altName         
})=>{

    const [imgState , setImageState] = React.useState(false)
    const imgRef =  React.useRef(null)

    React.useEffect(()=>{
        let observer = new IntersectionObserver((entries, ob)=>{
			entries.forEach((entry)=>{
        
				if(!entry.isIntersecting) {
					return 
				}else{
					setImageState(true)
					ob.unobserve(imgRef.current);
				}
			})
        }) 
    
		//observe
		observer.observe(imgRef.current)
    })

    return (    
        <>  
            <span 
                className="lazy__image" 
                ref={imgRef}>
                {   
                    imgState ?  (
                        <img src={src} />
                    ) : (
                        <span style={{ margin:"0 20px"}}>
                            <LoadingOutlined/>
                        </span>
                    )
                }
            </span>
        </>
    )
}

export default LazyImage;