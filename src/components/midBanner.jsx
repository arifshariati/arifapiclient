import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import colors from '../resource/colors';
import Texts from '../resource/texts';

export default function MidBanner(){
    return(
        <Container>
            <Row className="justify-content-md-center">
                <Col xs="12" lg="12">
                    <h3 style={{color:colors.green}}>{Texts.news_review_banner}</h3>
                </Col>
            </Row>
        </Container>
    )
}