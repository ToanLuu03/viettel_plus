import React from 'react';
import { Card, Row, Col } from 'antd';
import cam1 from '../../assets/cam1.png'
import cam2 from '../../assets/cam2.png'
import cam3 from '../../assets/cam3.png'
import './Cam.css'
const products = [
  {
    id: 1,
    title: 'CAMERA TRONG NHÀ_HC23',
    price: '690.000đ',
    imgSrc: cam1, 
  },
  {
    id: 2,
    title: 'CAMERA NGOÀI TRỜI_HC3',
    price: '990.000đ',
    imgSrc: cam2, 
  },
  {
    id: 3,
    title: 'CAMERA TRONG NHÀ_HC2',
    price: '690.000đ',
    imgSrc: cam3, 
  },
];

const Cam = () => {
  return (
    <div className="pt-4 container">
      <h2>
        CAMERA - THIẾT BỊ
      </h2>
      <Row className='pt-3' gutter={[16, 16]} justify="center">
        {products.map((product) => (
          <Col xs={24} sm={12} md={8} key={product.id}>
            <Card
              className="custom-card"
              hoverable
              cover={
                <img
                  alt={product.title}
                  src={product.imgSrc}
                  style={{ height: 150, objectFit: 'contain' }}
                />
              }
            >
              <Card.Meta
                title={<div style={{ textAlign: 'center' }}>{product.title}</div>}
                description={
                  <div style={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>
                    {product.price}
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cam;
