import { NavLink } from "react-router-dom";

// const NavbarComp=()=> {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link >
//             <NavLink to="/">
//               Home
//               </NavLink>
//             </Nav.Link>
//             <Nav.Link >Link</Nav.Link>
//             <Nav.Link>
//               <NavLink to="/signup">
//               Sign Up
//               </NavLink>
//              </Nav.Link>
//              <Nav.Link>
//               <NavLink to="/login">
//               Login
//               </NavLink>
//              </Nav.Link>
//              <Nav.Link>
//               <NavLink to="/create-post">
//               Create Post
//               </NavLink>
//              </Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";

const NavbarComp = () => {
  const [token, setToken] = useState("");
  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">NAI Tarang NGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link>
              <NavLink to="/" className="custom-link">
                Home
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/about" className="custom-link">
                About Us
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/projects" className="custom-link">
                Projects
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/contact" className="custom-link">
                Contact
              </NavLink>
            </Nav.Link>
            <Nav.Link>
              <NavLink to="/donate" className="custom-link">
                Donate
              </NavLink>
            </Nav.Link>
            {
              token &&  <Nav.Link>
              <NavLink to="/create-post" className="custom-link">Create Post</NavLink>
            </Nav.Link>
            }
           
            {token ? (
              <button className="custom-link" onClick={e=>{
                localStorage.removeItem( "token" )
                window.location.reload( )
              }} >
                logout
              </button>
            ) : (
              <Nav.Link>
                <NavLink to="/login" className="custom-link">
                  Login
                </NavLink>
              </Nav.Link>
            )}

            {token ? (
              " "
            ) : (
              <Nav.Link>
                <NavLink to="/signup" className="custom-link">
                  Sign Up
                </NavLink>
              </Nav.Link>
            )}
          </Nav>
          <Nav>
            {/* User Badge */}
            {token && (
              <Nav.Item>
                <Nav.Link href="/profile">
                  <Badge pill variant="info">
                    {/* {userName ? userName.charAt(0).toUpperCase() : "U"} */}A
                  </Badge>
                </Nav.Link>
              </Nav.Item>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
