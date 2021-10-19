import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Header from '../../components/Header/Header';
import Offer from '../../components/Offer/Offer';
import Service from '../../components/Service/Service';
import WelcomePart from '../../components/WelcomePart/WelcomePart';
import useServices from '../../Hooks/useServices';

const Home = () => {
    const [services] = useServices([]);
    return (
        <>
            <Header></Header>
            <WelcomePart></WelcomePart>
            <Container>
            <Row>
                <div className="col-12 col-md-10 col-lg-8 mx-auto">
                    <h2 className="text-center">Our Servises</h2>

                    <p className="text-center">we know that not only innovative technologies determine the quality of the service. A very important aspect in the production process is the contribution of our doctors.</p>
                </div>
            </Row>
                <Row xs={1} md={2} lg={3} className="g-4 my-5">
                {
                    services.slice(0, 6).map((service) => <Service key={service.id} service={service}></Service>)
                }
                </Row>
            </Container>
            <Offer></Offer>
        </>
    );
};

export default Home;