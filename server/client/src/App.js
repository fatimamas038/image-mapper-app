import React,{useState,useContext,createContext,useReducer,useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
//import "./App.css"
import MapperScreen from './screens/MapperScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import {BrowserRouter as Router,Route,useHistory,useLocation} from "react-router-dom";
import FeedbackScreen from './screens/FeedbackScreen';
import {reducer,initialState} from "./reducers/UserReducer" 
import NavbarComp from './components/NavbarComp';

export const UserContext=createContext()

const Routing = () => {
  const history=useHistory()
  const {state,dispatch}=useContext(UserContext)
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"USER",payload:user})
      history.push(location.pathname)
     
    }else{
      history.push("/login")
    }
   
    },[history,dispatch])
   
const [imgMapper,setImgmapper]=useState({})
// useEffect(() => {
//       let si=JSON.parse(localStorage.getItem('imgMap'))
//       if(si){
//         setImgmapper(si)
//       }
//       console.log(si);
      
//       }, []); 
  
 


  var imgMap
  const apidata={"images/R1000035203603000_D2.jpg": [{"category_id": 1, "category_name": "crack_linear", "bbox": [376.2855, 409.8025, 427.3087, 458.9337], "score": 0.9679, "meta": {"area": 57.057870370370374, "length": 19.280052132502256, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000035203603000_D2_0.png"}, {"category_id": 1, "category_name": "crack_linear", "bbox": [0.0, 352.9791, 483.6663, 425.6975], "score": 0.8858, "meta": {"area": 501.1332693713451, "length": 147.78364333980414, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000035203603000_D2_1.png"}, {"category_id": 2, "category_name": "crack_spider", "bbox": [49.3049, 10.932, 90.3443, 108.384], "score": 0.9395, "meta": {"area": 123.5002588937622, "length": 28.185079484231036, "num_endpoints": 5, "num_junctions": 3}, "mask": "masks/R1000035203603000_D2_2.png"}], "images/R1000032203567503_1_C6.jpg": [{"category_id": 1, "category_name": "crack_linear", "bbox": [3.8707, 45.3608, 46.9406, 64.3576], "score": 0.6809, "meta": {"area": 34.69650650024414, "length": 13.610146641890731, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000032203567503_1_C6_0.png"}, {"category_id": 5, "category_name": "aal", "bbox": [1.1393, 461.8505, 71.6237, 512.0], "score": 0.9202, "meta": {"area": 228.11307525634768, "length": 25.600360468472367, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000032203567503_1_C6_1.png"}, {"category_id": 2, "category_name": "crack_spider", "bbox": [38.0173, 257.2322, 227.8239, 512.0], "score": 0.8277, "meta": {"area": 333.8010787963867, "length": 85.46256308749253, "num_endpoints": 4, "num_junctions": 1}, "mask": "masks/R1000032203567503_1_C6_2.png"}], "images/R1000035203607827_E8.jpg": [{"category_id": 1, "category_name": "crack_linear", "bbox": [44.6513, 435.1879, 87.5694, 461.9285], "score": 0.9795, "meta": {"area": 36.13039488913255, "length": 14.553637796483851, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000035203607827_E8_0.png"}, {"category_id": 1, "category_name": "crack_linear", "bbox": [44.1659, 298.505, 495.0548, 394.3185], "score": 0.8223, "meta": {"area": 444.0753990009747, "length": 137.5087631338744, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000035203607827_E8_1.png"}, {"category_id": 1, "category_name": "crack_linear", "bbox": [146.1661, 155.037, 217.8383, 178.099], "score": 0.511, "meta": {"area": 65.78547225268032, "length": 21.472329589802023, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000035203607827_E8_2.png"}], "images/R1000028203525447_D7.jpg": [{"category_id": 1, "category_name": "crack_linear", "bbox": [414.7702, 361.6874, 465.9745, 462.5891], "score": 0.9436, "meta": {"area": 86.67548312133071, "length": 31.477479612751395, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000028203525447_D7_0.png"}, {"category_id": 1, "category_name": "crack_linear", "bbox": [471.1622, 332.6648, 483.7646, 359.5097], "score": 0.7921, "meta": {"area": 17.994583995841488, "length": 7.679645640281127, "num_endpoints": 3, "num_junctions": 1}, "mask": "masks/R1000028203525447_D7_1.png"}, {"category_id": 1, "category_name": "crack_linear", "bbox": [482.3786, 260.7905, 510.4662, 359.7792], "score": 0.7123, "meta": {"area": 88.08867034613502, "length": 30.96905143513309, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000028203525447_D7_2.png"}, {"category_id": 5, "category_name": "aal", "bbox": [400.6299, 451.833, 512.0, 511.0], "score": 0.8605, "meta": {"area": 509.3126758194716, "length": 36.375995387635875, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000028203525447_D7_3.png"}], "images/R1000035203603469_B7.jpg": [{"category_id": 1, "category_name": "crack_linear", "bbox": [443.0371, 173.6975, 507.4178, 469.8979], "score": 0.9746, "meta": {"area": 288.1032409667969, "length": 91.66041735992533, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000035203603469_B7_0.png"}, {"category_id": 3, "category_name": "crack_shadow", "bbox": [422.2615, 458.3602, 511.4399, 512.0], "score": 0.6383, "meta": {"area": 383.6361694335938, "length": 30.293859039544834, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000035203603469_B7_1.png"}, {"category_id": 5, "category_name": "aal", "bbox": [422.0236, 457.1283, 512.0, 512.0], "score": 0.6599, "meta": {"area": 389.8420486450196, "length": 30.555011167204285, "num_endpoints": 2, "num_junctions": 1}, "mask": "masks/R1000035203603469_B7_2.png"}]}
  //console.log(apidata);
  //const propertyNames = Object.values(apidata);
  const entries=Object.entries(apidata)
  console.log(entries);
  
  var clickHandler=(e,iname)=>{
    console.log(iname);
    setImgmapper(iname)
    console.log(imgMapper);
    history.push(`/fbs`)
  }

  const location = useLocation();

// useEffect(()=>{
// const user=JSON.parse(localStorage.getItem("user"))
// if(user){
//   dispatch({type:"USER",payload:user})
//   history.push(location.pathname)
 
// }else{
//   history.push("/login")
// }
// },[history,dispatch])
  return (
    <div>
    <NavbarComp />
      <Route path="/" exact>
    <MapperScreen entries={entries} clickHandler={clickHandler}/>
          </Route>
    <Route path="/fbs" >
    <FeedbackScreen imageMap={imgMapper} />
          </Route>
          <Route path="/login" >
    <LoginScreen />
          </Route>
          <Route path="/signup" >
    <SignupScreen />
          </Route>
    </div>
  )
}



const App = () => {
const [state,dispatch]=useReducer(reducer,initialState) 
 

  return (
   
    <UserContext.Provider value={{state,dispatch}}>
     
    <Router>
   
    <Routing />
    
    </Router>
    </UserContext.Provider>
  )
}

export default App
