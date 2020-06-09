import React, { Component } from 'react';
import {Card, Container,Navbar,NavLink,Nav,Row,Col,Carousel} from 'react-bootstrap';
import logo from '../images/GT_White.png';
import { animateScroll as scroll} from 'react-scroll'
import Nikhil_1 from '../images/Nikhil_1.png';
import Nikhil_2 from '../images/Nikhil_2.png';
import Nikhil_3 from '../images/Nikhil_3.png';
import Nikhil_4 from '../images/Nikhil_4.png';
import Nikhil_5 from '../images/Nikhil_5.png';
import ResearchNavbar from './researchnavbar';
import {loremIpsum} from 'react-lorem-ipsum';

class FinTech extends Component{
    scrollToTop() {
        scroll.scrollToTop();
      }
    render(){
        return(
            <div className = "research">
                <div >
                    <img height = "500px" src="https://www.thepositiveeconomist.com/wp-content/uploads/2017/07/Fintech-Susan-Hayes-Culleton-CFA.jpg" alt="" style={{width:'100%'}}/>
                    <div class="text-block-research">
                        <br/> 
                        <br/> 	
                        <h1 style = {{fontSize: '500%'}} ><strong></strong></h1>
                    </div>
                </div>

                <br/>

                <Container fluid>
                <Card className = "researchcard">
                        <Card.Header> 
                            <h3> COVID-19 Research </h3>
                            <h4> - <a target="_blank" href= "https://www.nikhil-paradkar.com/home">Lorem Ipsum</a></h4>
                            
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md = {12} lg = {6}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            height = "450px"
                                            className="d-block w-100"
                                            src={Nikhil_1}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "450px"
                                            className="d-block w-100"
                                            src={Nikhil_2}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "450px"
                                            className="d-block w-100"
                                            src={Nikhil_3}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "450px"
                                            className="d-block w-100"
                                            src={Nikhil_4}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            height = "450px"
                                            className="d-block w-100"
                                            src={Nikhil_5}
                                            alt=""
                                            />
                                        </Carousel.Item>
                                    </Carousel>
                                </Col>

                                <Col xs={12} md = {12} lg = {6}>
                                    <p align = "justify">
                                        <strong>Abstract: </strong>
                                        {loremIpsum()}
                                        <br/>
                                        <br/>
                                        <strong>Key Takeaway: </strong>
                                        {loremIpsum()}
                                    </p>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                    <br/>
                </Container>


            </div>
            );
  }
}

export default FinTech;