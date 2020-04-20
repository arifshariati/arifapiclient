import React, { Component } from 'react';
import { Container, Row,Col, Card } from 'react-bootstrap';
import colors from '../resource/colors';

class TopNews extends Component{

    render(){
        return(

        <Container className="topnews" style={{color:colors.green}}>
            <Row className="justify-content-md-center">
                <Col xs="12" lg="12">
                <Row className="justify-content-md-center">
                {
                    this.props.topnews.map((items,idx)=>
                        <Col key={idx} xs="12" lg="2">
                            <Card style={{border:"none"}}>
                                <Card.Img variant="top" src={items.image_url}/>
                                <Card.Body style={{padding:"0.2rem"}}>
                                    <Card.Title style={{fontSize:"small"}}>{items.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                        )
                }
                </Row>
                </Col>
            </Row>
        </Container>
        )
    }
}
export default TopNews;
