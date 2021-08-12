import React,{useState,useContext,useEffect} from 'react'
import {Form,Button,Toast, ToastBody,Alert} from "react-bootstrap"
import {UserContext} from "../App"
import {Link,useHistory,useLocation} from 'react-router-dom' 

const LoginScreen = () => {
  useEffect(()=>{
 
    if(state){
      
      history.push(location.pathname)
     
    }if(location.pathname==`/signup`){
        console.log(location.pathname);
      history.push(location.pathname)  
    }
    
    
    else{
      history.push("/login")
    }
    },[])
    const {state,dispatch}=useContext(UserContext)
    const history = useHistory()
    const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
    const location = useLocation();

    const PostData = ()=>{
      
       
        fetch("/user/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,  
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            
           if(data.error){
          console.log(data.error);
        alert(data.error)
           }
          
             // M.toast({html: data.error,classes:"#c62828 red darken-3"})  }
           else{
             localStorage.setItem("jwt",data.token)
             localStorage.setItem("user",JSON.stringify(data.user)) 
             dispatch({type:"USER",payload:data.user})
             console.log("signedin sucess");
             
             //M.toast({html:"signedin success",classes:"#43a047 green darken-1"})
               history.push('/')
               return;
           }
        }).catch(err=>{
            console.log(err)
        })
    }

    return (
      <>

        <Form style={{maxWidth:"600px",margin:"10px auto"}}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={email} 
              onChange={(e)=>{setEmail(e.target.value)}}
          />
          </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" value={password}
              onChange={(e)=>{setPasword(e.target.value)}}
          />
        </Form.Group>
        
        <Button variant="dark" onClick={PostData}>
          Submit
        </Button>
        <h6>New User?<Link to="/signup"> Signup</Link></h6>
      </Form>
      </>
    )
}

export default LoginScreen
