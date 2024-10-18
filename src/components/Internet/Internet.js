import React from 'react'
import { Card, Button, Row, Col } from 'antd';
import i1 from '../../assets/i1.webp'
import i2 from '../../assets/i2webp.webp'
import i3 from '../../assets/i3.webp'

const dataPlans = [
  {
    id: 1,
    title: '5G230B',
    price: '230.000đ',
    data: '0MB/30 ngày',
    detail: 'Xem chi tiết',
    buttonText: 'Đăng ký',
    src: i1
  },
  {
    id: 2,
    title: '5GLQ210',
    price: '210.000đ',
    data: '6GB/ngày/30 ngày',
    detail: 'Xem chi tiết',
    buttonText: 'Đăng ký',
    src: i2

  },
  {
    id: 3,
    title: '5G150',
    price: '150.000đ',
    data: '6GB/ngày/30 ngày',
    detail: 'Xem chi tiết',
    buttonText: 'Đăng ký',
    src: i3

  },
];

function Internet() {
  return (
    <div className='p-4 container'>
      <h2>
        DỊCH VỤ <span className='text-danger'>INTERNET</span>
      </h2>
      <Row className='pt-3' gutter={[16, 16]} justify="center">
        {dataPlans.map((plan) => (
          <Col xs={24} sm={12} md={8} key={plan.id}>
            <Card
              cover={
                <img
                  alt="example"
                  src={plan.src} 
                  style={{ height: 350, objectFit: 'cover' }}
                />
              }
              actions={[
                <Button className='text-bg-danger' block>
                  {plan.buttonText}
                </Button>,
              ]}
            >
              <Card.Meta
                title={plan.title}
                description={
                  <div>
                    <p>{plan.data}</p>
                    <p>{plan.price}</p>
                    <a className='text-danger' href="#1">{plan.detail}</a>
                  </div>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>)
}

export default Internet