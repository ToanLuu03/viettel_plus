import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Cam from '../../components/Cam/Cam';
import './CamInfor.css'
import hc33 from '../../assets/hc33.jpg'
import home_wifi2 from '../../assets/home_wifi2.png'
import cloud_cam from '../../assets/cloud_cam.png'
import home_wifi from '../../assets/home_wifi.png'

import { Card, Row, Col, Collapse } from 'antd';
const { Panel } = Collapse;

const products = [
  {
    id: 1,
    name: 'CAMERA NGOÀI TRỜI - HC33',
    price: '300.000đ',
    image: hc33,
  },
  {
    id: 2,
    name: 'GÓI LƯU TRỮ CLOUD 3 NGÀY',
    price: '20.000đ/tháng/thiết bị',
    image: cloud_cam,
  },
  {
    id: 3,
    name: 'HOMEWIFI (BỘ 3 THIẾT BỊ)',
    price: '2.100.000đ',
    image: home_wifi,
  },
  {
    id: 4,
    name: 'HOMEWIFI (BỘ 2 THIẾT BỊ)',
    price: '1.400.000đ',
    image: home_wifi2,
  },
];

function CamInfor() {
  return (
    <div>
      <Header selectedKey="cam" />
      <main className="inter1">
        <Cam />
      </main>
      <div className="container mt-5">
        <h2 className="text-center mb-4">THIẾT BỊ ĐI KÈM KHI MUA INTERNET / TRUYỀN HÌNH</h2>
        <Row gutter={[16, 16]}>
          {products.map((product) => (
            <Col key={product.id} xs={24} sm={12} md={6}>
              <Card hoverable className="product-card">
                <img src={product.image} alt={product.name} className="product-image" />
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">{product.price}</p>
              </Card>
            </Col>
          ))}
        </Row>
        <div className='fqa'>
          <h2>Câu hỏi thường gặp</h2>
          <Collapse>
            <Panel header="1. Camera có độ phân giải bao nhiêu?" key="1">
              <p>Độ phân giải của camera phụ thuộc vào từng mẫu sản phẩm, từ HD (720p) cho đến 4K (2160p) cho hình ảnh sắc nét.</p>
            </Panel>
            <Panel header="2. Tôi có thể quay video vào ban đêm không?" key="2">
              <p>Các mẫu camera hiện đại được trang bị công nghệ hồng ngoại cho phép quay video trong điều kiện ánh sáng yếu hoặc ban đêm.</p>
            </Panel>
            <Panel header="3. Làm thế nào để kết nối camera với điện thoại?" key="3">
              <p>Bạn có thể kết nối camera với điện thoại thông qua ứng dụng đi kèm, thường có sẵn trên App Store hoặc Google Play.</p>
            </Panel>
          </Collapse>
          <div className="mt-4">
            <h2>Thông tin thêm</h2>
            <p>Chúng tôi cung cấp đa dạng các loại camera với nhiều tính năng khác nhau, đáp ứng nhu cầu sử dụng của mọi khách hàng. Để biết thêm thông tin, vui lòng truy cập trang web của chúng tôi hoặc liên hệ với bộ phận chăm sóc khách hàng.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CamInfor;
