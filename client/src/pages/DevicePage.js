import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Image from 'react-bootstrap/Image';
import star from '../assets/star.png';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';

const DevicePage = () => {
    const device = { id: 1, name: "Iphone 12 pro", price: 25000, rating: 5, img: "https://media.bite.lt/@bite-lv/sites/default/files/products/2020-10/iphone-12-pro-gold_3.png" };

    const description = [
        {id: 1, title: "Оперативная память", description: "5 ГБ"},
        {id: 2, title: "Камера", description: "12 МП"},
    ];

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{ background: `url(${star}) no-repeat center center`, width: 240, height: 240, backgroundSize: "cover", fontSize: 64, fontWeight: 'bold' }}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-center"
                        style={{width: 300, height: 300, fontSize: 32, border: "5px solid lightgray"}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"}>Добавить в корзину</Button>
                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    );
};

export default DevicePage;