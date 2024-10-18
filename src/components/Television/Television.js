import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import './Television.css'; 

const { Text } = Typography;

const packages = [
  {
    name: 'STAR1T',
    price: '210.000đ/tháng',
    speed: '200Mbps+1 Ho...',
    details: [
      'Áp dụng tại 61 Tỉnh và ngoại thành Hà Nội, TP Hồ Chí Minh.',
      'Phù hợp với khách hàng có nhu cầu cơ bản.',
    ],
  },
  {
    name: 'HOMET',
    price: '165.000đ/tháng',
    speed: '150Mbps',
    details: [
      'Áp dụng tại 61 tỉnh (trừ HNI và HCM).',
      'Phù hợp với cá nhân, hộ gia đình.',
    ],
  },
  {
    name: 'STAR2T',
    price: '245.000đ/tháng',
    speed: 'Lên tới 1 Gbps+...',
    details: [
      'Áp dụng tại 61 Tỉnh và ngoại thành Hà Nội, TP Hồ Chí Minh.',
      'Phù hợp với khách hàng có nhu cầu cao.',
    ],
  },
  {
    name: 'SUN1T',
    price: '180.000đ/tháng',
    speed: '200Mbps',
    details: [
      'Áp dụng tại 61 Tỉnh và ngoại thành Hà Nội, TP Hồ Chí Minh.',
      'Phù hợp với cá nhân, hộ gia đình.',
    ],
  },
];

const Television = () => {
  return (
    <div className="pt-4 container">
      <h2>
        TRUYỀN HÌNH - INTERNET
      </h2>
      <Row className='pt-3 television-container' gutter={[16, 16]}>
        {packages.map((pkg, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <Card title={pkg.name} bordered={false} className="package-card">
              <Text className='television-price' strong>{pkg.price}</Text>
              <p>{pkg.speed}</p>
              <ul>
                {pkg.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
              <a href="#1">Xem chi tiết</a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Television;
