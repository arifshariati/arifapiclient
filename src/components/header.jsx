import React from 'react';
import { Navbar,Nav, Container, Row,Col } from 'react-bootstrap';
import colors from '../resource/colors';
import Texts from '../resource/texts';

function Header(){
return(
    <div className="header" style={{backgroundColor:colors.light_grey}}>
        <Container fluid>
            <Row className="justify-content-md-center">
                <Col xs="12" lg="8">
                    <Navbar expand="lg">
                        <Navbar.Brand href="/" style={{fontSize:"x-large",fontWeight:"bold"}}>{Texts.site_name} </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav pullright="true">
                                <Nav.Link href="/" alt="Home Page"><b>{Texts.home_page}</b></Nav.Link>
                                <Nav.Link href="/Ariananews" alt="Afghanistan Business News"><b>{Texts.heading.Ariananews}</b></Nav.Link>
                                <Nav.Link href="/Pajhwok" alt="Afghanistan Sports News"><b>{Texts.heading.Pajhwok}</b></Nav.Link>
                                <Nav.Link href="/Khaama" alt="Afghanistan Sports News"><b>{Texts.heading.Khaama}</b></Nav.Link>
                                <Nav.Link href="/Voadari" alt="Afghanistan Sports News"><b>{Texts.heading.Voadari}</b></Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
        </div>
)
}
export default Header;