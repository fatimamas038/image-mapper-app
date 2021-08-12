import React,{useState,useContext,useEffect} from 'react'
import ImageMapper from 'react-image-mapper';
import {UserContext} from "../App"
import {Button} from "react-bootstrap"

const FeedbackScreen = ({imageMap}) => {
  var stateValue=imageMap
  console.log(stateValue);
  
  const [imgMap,setImgMap]=useState(imageMap)
  
  

  const [comment,setComment]=useState("")
  const [data,setData]=useState([])
  
 
    const {state,dispatch}=useContext(UserContext)
// console.log(typeof(imgMap));
// console.log(imgMap.name);
// const name=imgMap.name




useEffect(()=>{
  fetch("/allcomments",{
  
    headers:{
      "Content-Type":"application/json",
      "authorization":"Bearer "+localStorage.getItem("jwt")
    },
    
  }).then(res=>res.json())
  .then(result=>{
    console.log(result);
    console.log(result.docs);
    const newData=result.docs.filter(item=>{
      if(item.name===imgMap.name){
        return item
        
      }
    })
    console.log(newData[0].comments);
    setData(newData[0].comments) 
  })
    },[])
const makeComment=(text,name)=>{
  fetch("/comment",{
    method:"put",
    headers:{
      "Content-Type":"application/json",
      "authorization":"Bearer "+localStorage.getItem("jwt")
    },body:JSON.stringify({
      name:name,
      text
    })
  }).then(res=>res.json())
  .then(result=>{
    console.log(result);
    setData(result.comments)
    console.log(result.comments);
  }).catch(err=>{
    console.log(err);
  })
    }
//     const submitHandler=(e)=>{
// e.preventDefault();
// setCommentarray((prev) => {
//     return [...prev, comment];
//   })
  
//   setComment("")

//     }
    console.log(imgMap);
    return (<div style={{padding:"20px"}}>
        <figure key={imgMap.name} style={{position:"relative"}}>
        <ImageMapper src={imgMap.name} map={imgMap} imgWidth={445} className={imgMap.name} 
  lineWidth={5} fillColor="transparent" />
  {imgMap.areas.map(area=>(<div key={area.id} className='product-data-point' 
      style={{position:"absolute",top:`${area.coords[1]}px`,left:`${area.coords[0]}px`,zIndex:2,transform:"translate(-10%, -120%)",border:`${1}px dotted black`,padding:`${0}px`,fontWeight:"bold",background:"beige"}}>
      {area.category_name}
      </div>))}
      </figure>
    {!state&&<h6>please sign in to write the feedback</h6>}
    {state&&<><h2>FEEDBACK</h2>
      
      { data.map((item,idx)=>{
   return <p key={idx}><span style={{fontWeight:"bold"}}>{item.postedBy.name}: </span>{item.text}</p>
 })}
  
  
      <form onSubmit={(e)=>{
e.preventDefault()
//console.log(e.target[0].value)
makeComment(comment,imgMap.name)
setComment("")
           }}>
      <label><span style={{fontWeight:"bold"}}>Defective output:  </span></label>
      <input type="text" value={comment} onChange={(e)=>{setComment(e.target.value)}}/>
      <Button variant="dark" type="submit">Submit</Button>
      </form></>}
      
      </div>

    )
}

export default FeedbackScreen
