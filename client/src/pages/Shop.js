import React, { useContext, useEffect } from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { fetchBrands, fetchDevices, fetchTypes } from '../http/deviceAPI';
import { Context } from '../index';

const Shop = observer(() => {
    const {device} = useContext(Context);

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data));
        fetchBrands().then(data => device.setBrands(data));
        fetchDevices().then(data => device.setDevices(data.rows));
    }, []);

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
});

export default Shop;