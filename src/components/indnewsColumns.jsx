import React from 'react';
import { Container, Row,Col,Button } from 'react-bootstrap';
import colors from '../resource/colors';
import Texts from '../resource/texts';

export default function NewsColumns(props){
    return (

        <Container>
            <Row className="justify-content-md-center">
            {
                props.data.map((items,i)=>
                <Col xs="12" lg="12" style={{display:"flex",flexDirection:"right", textAlign:"right",padding:"1rem"}}>
                    <Col xs="4" lg="4">
                        <img style={{width:"100%"}} src={items.image_url}/>
                        
                    </Col>

                    <Col xs="8" lg="8">
                        <h5><a href={items.link} target="_blank">{items.title}</a></h5>
                        <p><a href={items.link} target="_blank">{items.exerpt}</a></p>
                        <Button 
                            href={items.link} 
                            target="_blank" 
                            style={{backgroundColor:colors.brown,borderColor:colors.brown}}
                        >اطلاعات بیشتر در وب سایت
                        </Button>
                    </Col>
                </Col>                   
                )
                }
            </Row>
        </Container>
    )
}