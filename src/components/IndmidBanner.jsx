import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import colors from '../resource/colors';
import Texts from '../resource/texts';

export default function IndMidBanner(){
    return(
        <Container style={{padding:"3rem"}}>
            <Row className="justify-content-md-center">
                <Col xs="12" lg="12" style={{textAlign:"right"}}>
                    <h3 style={{color:colors.brown}}>{Texts.news_review_banner}</h3>
                </Col>
            </Row>
        </Container>
    )
}