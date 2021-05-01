import React from 'react';
import {Nav, Container,Navbar, NavbarBrand, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useContext} from "react"
import {UserContext} from "../contexts/userContext"
import {FiPower, FiUser} from "react-icons/fi"

 const Header = () => {
    const {logout, user} = useContext (UserContext)

    const handleLogout =() =>{
        logout();
    };


    return (
        <Navbar classname="bg-primary navbar-expand">
        <Container>
            <NavbarBrand>TDAY</NavbarBrand>
        <Nav>
        {
            user.token?(
                <><Nav.Link>
                <Link to = "/food" classname="nav-link">FOOD </Link>
            </Nav.Link>
            <Nav.Link>
                <Link to = "/addfood" classname="nav-link">ADD MEAL</Link>
            </Nav.Link>
            <NavDropdown title={<FiUser size={25} style={{
                border: "2px solid black",
                borderRadius:20,
                padding:2,
                }}
                />} >
                <NavDropdown.Item>{user.name} </NavDropdown.Item>
                <NavDropdown.Item>{user.email} </NavDropdown.Item>
                <Nav.Link onClick={handleLogout}>logout</Nav.Link>
            </NavDropdown>
            
            </>
            ):(
                <>
            <Nav.Link>
                <Link to = "/login" classname="nav-link">LOG IN</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to = "/register" classname="nav-link">SIGN UP</Link>
            </Nav.Link>
                </>
            )
        }
            
        </Nav>
        </Container>
        </Navbar>
    )
}
export default Header;