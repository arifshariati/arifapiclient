import React from 'react';
import { Container, Row,Col } from 'react-bootstrap';
import colors from '../resource/colors';
import Texts from '../resource/texts';

export default function NewsColumns(props){
    return (

        <Container>
            <Row className="justify-content-md-center">
                <Col xs="12" lg="12">
                    <Row className="justify-content-md-center">

                        <Col xs="12" lg="3" style={{padding:"2rem"}}>
                            <h4 style={{color:colors.green,marginBottom:"1rem",marginTop:"1rem"}}>{Texts.heading.Ariananews}</h4>
                            {
                                props.ariananews.map((items,i)=>
                                <Row key={i} className="justify-content-md-center" style={{minHeight:"13rem"}}>
                                    <img style={{width:"100%"}} src={items.image_url}/>
                                    <p><a href={items.link} target="_blank">{items.title}</a></p>
                                </Row>
                                )
                            }
                            
                        </Col>

                        <Col xs="12" lg="3" style={{padding:"2rem"}}>
                            <h4 style={{color:colors.green,marginBottom:"1rem",marginTop:"1rem"}}>{Texts.heading.Pajhwok}</h4>
                            {
                                props.pajhwoknews.map((items,i)=>
                                <Row key={i} className="justify-content-md-center" style={{minHeight:"13rem"}}>
                                    <img style={{width:"100%"}} src={items.image_url}/>
                                    <p><a href={items.link} target="_blank">{items.title}</a></p>
                                </Row>
                                )
                            }
                            
                        </Col>

                        <Col xs="12" lg="3" style={{padding:"2rem"}}>
                            <h4 style={{color:colors.green,marginBottom:"1rem",marginTop:"1rem"}}>{Texts.heading.Khaama}</h4>
                            {
                                props.khaama.map((items,i)=>
                                <Row key={i} className="justify-content-md-center" style={{minHeight:"13rem"}}>
                                    <img style={{width:"100%"}} src={items.image_url}/>
                                    <p><a href={items.link} target="_blank">{items.title}</a></p>
                                </Row>
                                )
                            }
                            
                        </Col>

                        <Col xs="12" lg="3" style={{padding:"2rem"}}>
                            <h4 style={{color:colors.green,marginBottom:"1rem",marginTop:"1rem"}}>{Texts.heading.Voadari}</h4>
                            {
                                props.voadari.map((items,i)=>
                                <Row key={i} className="justify-content-md-center" style={{minHeight:"13rem"}}>
                                    <img style={{width:"100%"}} src={items.image_url}/>
                                    <p><a href={items.link} target="_blank">{items.title}</a></p>
                                </Row>
                                )
                            }
                            
                        </Col>

                    </Row>
                </Col>
            </Row>
        </Container>
    )
}