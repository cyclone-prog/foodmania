import React from 'react'

function SkeletonBox() {
  return (
    <div className="container container-top-margin">
        <div className="box" style={{width:'200px',height:'200px', backgroundColor:'#aeb4b8', margin:'2em',padding:'1em'}}>
            <div className="image-shadow" style={{width:'100px',height:'100px',borderRadius:'50%',backgroundColor:'#7e8285',}}></div>
            <div className="title-shadow" style={{width:'70%',height:'20px',backgroundColor:"#7e8285" ,margin:'5px'}}></div>
            <div className="text-shadow" style={{width:"100%",height:"10px",backgroundColor:"#7e8285",margin:"5px"}}></div>
            <div className="text-shadow" style={{width:"100%",height:"10px",backgroundColor:"#7e8285",margin:"5px"}}></div><div className="text-shadow" style={{width:"100%",height:"10px",backgroundColor:"#7e8285",margin:"5px"}}></div>

        </div>
    </div>
  )
}

export default SkeletonBox