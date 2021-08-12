import React,{useState} from 'react'
import {Form,Button} from "react-bootstrap"
import {Link,useHistory} from "react-router-dom"
import axios from "axios"


const SignupScreen = () => {
  const history=useHistory()
  const [name,setName] = useState("")

  const [password,setPasword] = useState("")
    const [email,setEmail] = useState("")
  const uploadFields=()=>{
    const config={
        headers:{"content-type":"application/json"}
    }

axios.post("/user/signup", { name,email,password })
.then((response) =>{console.log(response.data.message)
alert(response.data.message)
history.push("/login")
}
)
.catch(err => {
    // what now?
    if (err.response) {
        // client received an error response (5xx, 4xx)
        console.log(err.response.data);
       alert(err.response.data.error)
     } else {
        // anything else
      }
})
   setName("")
   setEmail("")
   setPasword("")
}
    return (
        <Form style={{maxWidth:"600px",margin:"10px auto"}}>
       <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
          </Form.Group>
      
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
        
        <Button variant="dark" onClick={uploadFields}>
          Submit
        </Button>
        <h6>Already a User?<Link to="/login"> Login</Link></h6>
      </Form>
    )
}

export default SignupScreen
