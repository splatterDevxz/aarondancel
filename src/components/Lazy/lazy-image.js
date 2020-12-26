import React from "react"


const LazyImage = ({ src, altName})=>{

    const [imgState , setImageState] = React.useState(false)
    const imgRef =  React.useRef(null)

    React.useEffect(()=>{
        let observer = new IntersectionObserver((entries, ob)=>{
			entries.forEach((entry)=>{
				
				if(!entry.isIntersecting) {
					return
				}else{
					setImageState(true)
					// ob.unobserve(imgRef.current);
				}
			})
        }) 
     
        console.log(imgState);

		//observe
		observer.observe(imgRef.current)
    })

    return (    
        <>
            <img ref={imgRef} src={src} />
        </>
    )
}

export default LazyImage;