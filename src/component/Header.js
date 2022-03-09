import React from 'react'
import { Navbar, Container, Nav, } from 'react-bootstrap'
import logo from '../static/img/sunf.png'
import '../static/Header.css'
function Header() {
    return (
        <>
            <header>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <div className='header'><img src={logo} />Sunfkkc</div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="/jwt">JWT LogIn</Nav.Link>

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    )
}

export default Header