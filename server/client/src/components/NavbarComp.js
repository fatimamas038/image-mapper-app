import React,{useContext} from 'react'
import {Nav,Navbar,Container} from "react-bootstrap"
import {Link,useHistory} from "react-router-dom"
import {UserContext} from "../App"

const NavbarComp = () => {
  const history=useHistory()
  const {state,dispatch}=useContext(UserContext)
  console.log(state);
  var statevar=state
    return (
        <div>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="/">ImageMapperApp</Navbar.Brand>
    <Nav className="me-auto">
    {state?(<Nav.Link onClick={()=>{
                    localStorage.clear()
                    dispatch({type:"CLEAR"})
                    history.push("/login")
                  }}>Logout</Nav.Link>):<Nav.Link href="/login">Login</Nav.Link>}  
      
     
    </Nav>
    </Container>
  </Navbar>
  <br />
        </div>
    )
}

export default NavbarComp


// import React,{useContext} from 'react'
// import {Link,useHistory} from "react-router-dom"
// import {UserContext} from "../App"
// import M from "materialize-css"


// const NavbarComp = () => {
//   const history=useHistory()
//   const {state,dispatch}=useContext(UserContext)
  
//  return (
//       <>
//       <nav className="nav-extended">
//     <div className="nav-wrapper white">
//       <Link to={state?"/":"/login"} className="brand-logo">Assignment</Link>
//       <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
//       <ul id="nav-mobile" className="right hide-on-med-and-down" >
//         {state?<>
          
// <li key="1"><Link to="/create">Create post</Link></li>
// <li key="4">
//                   <button className="btn"
//                   onClick={()=>{
//                     localStorage.clear()
//                     dispatch({type:"CLEAR"})
//                     history.push("/login")
//                   }}>Logout
        
//                   </button>
//                 </li>
        
//         </>:<>
//         <li key="2"><Link to="/login">Login</Link></li>
//         <li key="3"><Link to="/signup">Signup</Link></li>
//         </>}
        
//       </ul>
//     </div>
  
//   </nav>
  
//     </>
//     )
// }

// export default NavbarComp