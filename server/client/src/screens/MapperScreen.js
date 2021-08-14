import React,{useState,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Container,Col} from 'react-bootstrap'

import ImageMapper from 'react-image-mapper';
import { useHistory } from 'react-router-dom';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';



const MapperScreen = ({entries1,clickHandler}) => {
  console.log(entries1);
  
const [entries,setEntries]=useState(entries1)

useEffect(()=>{
  fetch("/alldefects",{
  
    headers:{
      "Content-Type":"application/json",
      "authorization":"Bearer "+localStorage.getItem("jwt")
    },
    
  }).then(res=>res.json())
  .then(result=>{
    console.log(result[0].entries);
    setEntries(result[0].entries)
     })
},[])

const makeDefectFalse=() => {
  fetch("/alldefects",{
    method:"put",
    headers:{
      "Content-Type":"application/json",
      "authorization":"Bearer "+localStorage.getItem("jwt")
    },body:JSON.stringify({
      entries:entries
    })
  }).then(res=>res.json())
  .then(result=>{
    console.log(result.entries);
    
  }).catch(err=>{
    console.log(err);
  })

    
  
}
 
  const handleClick = (area,iMap) => {
    console.log(area);
    console.log(iMap);
    alert("You have marked Defect Area as false")
    // area.defect=area.defect+1
    // setState((prev)=>{
    //   return !prev
    // })
    const fltr=entries.map(item=>{
      console.log(item[1]);
if(item[0]==iMap.name){
return [iMap.name,item[1].map(item=>{
     
  if(item.coords[0]==area.coords[0]&&item.coords[1]==area.coords[1]&&item.coords[2]==area.coords[2]&&item.coords[3]==area.coords[3]){
    console.log(item);
    item.defect=item.defect+1
    return item
  }
  else{
    return item
  }
})]}else{
  return item
}
    })
    console.log(fltr);
    makeDefectFalse(fltr)
    setEntries(fltr)
  }
   
    const history = useHistory()
    return (
        <Container className="justify-content-md-center">
  <Row className="justify-content-md-center bg-dark" style={{color:"white",padding:"20px",margin:"10px"}}>
    Welcome, Click on the Defect Area to mark it as false
  </Row> 

{entries&&entries.map(entry=>{
  var imgMap={
    name:entry[0],
    areas : entry[1].map( s => {
    if(!s.defect){
s.defect=0
    }
  if ( s.hasOwnProperty("bbox") )
  {
     s.coords = s.bbox;
     s.id=s.category_id;
     s.shape="rect";
     s.preFillColor="transparent"
    
     delete s.bbox;   
  }
  if(s.category_name=="crack_linear"){
    s.strokeColor="pink"
  }else if(s.category_name=="crack_spider"){
    s.strokeColor="green"
  }else if(s.category_name=="aal"){
    s.strokeColor="blue"
  }
  else if(s.category_name=="crack_shadow"){
    s.strokeColor="orange"
  }
  
  
  return s;
})
  }
{console.log(imgMap)}
  return <figure key={imgMap.name} style={{position:"relative"}}>
  <ImageMapper src={imgMap.name} map={imgMap} imgWidth={445} className={imgMap.name} 
  lineWidth={5} fillColor="transparent" onClick={(area) =>handleClick(area,imgMap)}/>

  {imgMap.areas.map((area,idx)=>(<div><div key={area.id}
      style={{position:"absolute",top:`${area.coords[1]}px`,left:`${area.coords[0]}px`,zIndex:2,transform:"translate(-10%, -120%)",border:`${1}px dotted black`,fontWeight:"bold",background:"beige",padding:"0 0%"}}>
     {idx+1}. {area.category_name}
      </div><CancelPresentationIcon /> {idx+1}.{area.category_name}'s false count: <span style={{fontWeight:"bold"}}>{area.defect}</span></div>))}
     
     </figure> 
})} 

</Container>
    )
}

export default MapperScreen
