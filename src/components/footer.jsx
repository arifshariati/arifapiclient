import React from 'react';
import { Container, Row,Col} from 'react-bootstrap';
import colors from '../resource/colors';
const dataProvider = 'https://github.com/CSSEGISandData/COVID-19';
const dataParser = 'https://github.com/pomber/covid19';

function Footer(){
    return(
        <div className="footer">
            <Container fluid>
            <Row className="justify-content-md-center" style={{backgroundColor:colors.green,padding:"2rem"}}>
                <Col xs="12" lg="8">
                <p style={{ fontSize: 24, lineHeight: 1.2, marginTop: 10,marginBottom:24, marginLeft:50,marginRight:50 }}>
                نخستین مجموعه اخبار وب سایت در افغانستان. این اقدامی است که همه ارائه دهندگان خبر در افغانستان را به همراه دارد  
                </p>
                </Col>
            </Row>
        </Container>
        </div>
    )
}
export default Footer;