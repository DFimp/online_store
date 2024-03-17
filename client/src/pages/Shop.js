import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';

const Shop = () => {
    return (
        <Container className="mt-2">
            <Row>
                <Col md={3}>
                    <TypeBar />
                </Col>
                <Col>
                    <BrandBar />
                    <DeviceList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;