import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Container,Col} from 'react-bootstrap'
//import "./App.css"
import ImageMapper from 'react-image-mapper';
import { Translate } from '@material-ui/icons';


const App = () => {


var imgMap
const apidata={"images/R1000035203603000_D2.jpg": [{"category_id": 1, "category_name": "crack_linear", "bbox": [376.2855, 409.8025, 427.3087, 458.9337], "score": 0.9679, "meta": {"area": 57.057870370370374, "length": 19.280052132502256, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000035203603000_D2_0.png"}, {"category_id": 1, "category_name": "crack_linear", "bbox": [0.0, 352.9791, 483.6663, 425.6975], "score": 0.8858, "meta": {"area": 501.1332693713451, "length": 147.78364333980414, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000035203603000_D2_1.png"}, {"category_id": 2, "category_name": "crack_spider", "bbox": [49.3049, 10.932, 90.3443, 108.384], "score": 0.9395, "meta": {"area": 123.5002588937622, "length": 28.185079484231036, "num_endpoints": 5, "num_junctions": 3}, "mask": "masks/R1000035203603000_D2_2.png"}], "images/R1000032203567503_1_C6.jpg": [{"category_id": 1, "category_name": "crack_linear", "bbox": [3.8707, 45.3608, 46.9406, 64.3576], "score": 0.6809, "meta": {"area": 34.69650650024414, "length": 13.610146641890731, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000032203567503_1_C6_0.png"}, {"category_id": 5, "category_name": "aal", "bbox": [1.1393, 461.8505, 71.6237, 512.0], "score": 0.9202, "meta": {"area": 228.11307525634768, "length": 25.600360468472367, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000032203567503_1_C6_1.png"}, {"category_id": 2, "category_name": "crack_spider", "bbox": [38.0173, 257.2322, 227.8239, 512.0], "score": 0.8277, "meta": {"area": 333.8010787963867, "length": 85.46256308749253, "num_endpoints": 4, "num_junctions": 1}, "mask": "masks/R1000032203567503_1_C6_2.png"}], "images/R1000035203607827_E8.jpg": [{"category_id": 1, "category_name": "crack_linear", "bbox": [44.6513, 435.1879, 87.5694, 461.9285], "score": 0.9795, "meta": {"area": 36.13039488913255, "length": 14.553637796483851, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000035203607827_E8_0.png"}, {"category_id": 1, "category_name": "crack_linear", "bbox": [44.1659, 298.505, 495.0548, 394.3185], "score": 0.8223, "meta": {"area": 444.0753990009747, "length": 137.5087631338744, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000035203607827_E8_1.png"}, {"category_id": 1, "category_name": "crack_linear", "bbox": [146.1661, 155.037, 217.8383, 178.099], "score": 0.511, "meta": {"area": 65.78547225268032, "length": 21.472329589802023, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000035203607827_E8_2.png"}], "images/R1000028203525447_D7.jpg": [{"category_id": 1, "category_name": "crack_linear", "bbox": [414.7702, 361.6874, 465.9745, 462.5891], "score": 0.9436, "meta": {"area": 86.67548312133071, "length": 31.477479612751395, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000028203525447_D7_0.png"}, {"category_id": 1, "category_name": "crack_linear", "bbox": [471.1622, 332.6648, 483.7646, 359.5097], "score": 0.7921, "meta": {"area": 17.994583995841488, "length": 7.679645640281127, "num_endpoints": 3, "num_junctions": 1}, "mask": "masks/R1000028203525447_D7_1.png"}, {"category_id": 1, "category_name": "crack_linear", "bbox": [482.3786, 260.7905, 510.4662, 359.7792], "score": 0.7123, "meta": {"area": 88.08867034613502, "length": 30.96905143513309, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000028203525447_D7_2.png"}, {"category_id": 5, "category_name": "aal", "bbox": [400.6299, 451.833, 512.0, 511.0], "score": 0.8605, "meta": {"area": 509.3126758194716, "length": 36.375995387635875, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000028203525447_D7_3.png"}], "images/R1000035203603469_B7.jpg": [{"category_id": 1, "category_name": "crack_linear", "bbox": [443.0371, 173.6975, 507.4178, 469.8979], "score": 0.9746, "meta": {"area": 288.1032409667969, "length": 91.66041735992533, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000035203603469_B7_0.png"}, {"category_id": 3, "category_name": "crack_shadow", "bbox": [422.2615, 458.3602, 511.4399, 512.0], "score": 0.6383, "meta": {"area": 383.6361694335938, "length": 30.293859039544834, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000035203603469_B7_1.png"}, {"category_id": 5, "category_name": "aal", "bbox": [422.0236, 457.1283, 512.0, 512.0], "score": 0.6599, "meta": {"area": 389.8420486450196, "length": 30.555011167204285, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000035203603469_B7_2.png"}]}
console.log(apidata);
const propertyNames = Object.values(apidata);
const entries=Object.entries(apidata)
console.log(entries);
// entries.map(entry=>{
//   console.log(entry);
//   console.log(entry[0]);
//   console.log(entry[1]);
//   entry[1].map(item=>{
// console.log(item);
// console.log(entry[0]);
//   })
// })




  // entries.map(entry=>{
  //   const imageMap={
  //     name:entry[0],
  //     areas:entry[1].map(item=>{
  //    id:item.category_id;
  //     coords:item.bbox;
  //     name:item.category_name;
  //     })
  //   }
  // })
  


  return (
    <Container>
  <Row className="justify-content-md-center" style={{backgroundColor:"pink",fontSize:"40px"}}>
    Welcome
  </Row> 

{entries.map(entry=>{
  imgMap={
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

  return <figure style={{position:"relative"}}>
  <ImageMapper src={imgMap.name} map={imgMap} imgWidth={445} className={imgMap.name} 
  lineWidth={5} fillColor="transparent" />
  {imgMap.areas.map(area=>(<div key={area.id} className='product-data-point' 
      style={{position:"absolute",top:`${area.coords[1]}px`,left:`${area.coords[0]}px`,zIndex:2,transform:"translate(-10%, -120%)",border:`${1}px dotted black`,padding:`${0}px`,fontWeight:"bold",background:"beige"}}>
      {area.category_name}
      </div>))}  
      </figure> 
})} 

  {/* <ImageMapper src={} map={imageMap} width={660} imgWidth={2646} className='camera' strokeColor='pink' lineWidth={5} fillColor="transparent" className="camera" />
      {imageMap.areas.map(area=>(<div key={area.id} className='product-data-point' 
      style={{top:`${area.coords[1]/4.03}px`,left:`${area.coords[1]/4.03}px`}}>
      <p>{area.id} jha.sefhoerwut9eugjfakj;oesqu9</p>
      </div>))} */}

</Container>
  )
}

export default App
