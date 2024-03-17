import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';



const BrandBar = observer(() => {
    const { device } = useContext(Context);

    return (
        <Row className="g-0">
            {device.brands.map(brand =>
                <Col md={2} key={brand.id}>
                    <Card
                        style={{cursor:"pointer"}}
                        onClick={() => device.setSelectedBrand(brand)}
                        className="p-3"
                        border={brand.id === device.selectedBrand.id ? "primary" : "light"}
                    >
                        {brand.name}
                    </Card>
                </Col>
            )}
        </Row>
    );
});

export default BrandBar;