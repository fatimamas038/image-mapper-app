import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Container,Col} from 'react-bootstrap'
//import "../App.css"
import ImageMapper from 'react-image-mapper';
import { useHistory } from 'react-router-dom';


const MapperScreen = ({entries,clickHandler}) => {
    const history = useHistory()
    return (
        <Container className="justify-content-md-center">
  <Row className="justify-content-md-center bg-dark" style={{color:"white",padding:"20px",margin:"10px"}}>
    Welcome, Click on the Image to write the feedback
  </Row> 

{entries.map(entry=>{
  var imgMap={
    name:entry[0],
    areas : entry[1].map( s => {
    
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

  return <figure key={imgMap.name} style={{position:"relative"}}>
  <ImageMapper src={imgMap.name} map={imgMap} imgWidth={445} className={imgMap.name} 
  lineWidth={5} fillColor="transparent" onImageClick={evt =>clickHandler(evt,imgMap)} />
  {imgMap.areas.map(area=>(<div key={area.id} className='product-data-point' 
      style={{position:"absolute",top:`${area.coords[1]}px`,left:`${area.coords[0]}px`,zIndex:2,transform:"translate(-10%, -120%)",border:`${1}px dotted black`,fontWeight:"bold",background:"beige",padding:"0 0%"}}>
      {area.category_name}
      </div>))}
     
                        
      </figure> 
})} 

</Container>
    )
}

export default MapperScreen
