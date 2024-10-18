import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Television from '../../components/Television/Television';
import { Collapse, Card, Col, Row, Button } from 'antd'; 
import './TelevisionInfor.css'; 

const { Panel } = Collapse;

const televisionProducts = [
  {
    title: "Truyền Hình Cáp",
    description: "Kênh truyền hình cáp chất lượng cao với nhiều lựa chọn.",
    features: ["Hơn 100 kênh", "Chất lượng HD", "Gói ưu đãi cho gia đình"],
    price: "200.000 VNĐ/tháng",
    promotion: "Giảm 20% cho 3 tháng đầu"
  },
  {
    title: "Truyền Hình Internet",
    description: "Xem truyền hình qua Internet với tốc độ ổn định.",
    features: ["Xem trên nhiều thiết bị", "Ứng dụng Viettel TV", "Không cần đầu thu"],
    price: "150.000 VNĐ/tháng",
    promotion: "Tặng 1 tháng miễn phí"
  },
  {
    title: "Gói Premium",
    description: "Gói dịch vụ cao cấp với các kênh quốc tế.",
    features: ["Hơn 150 kênh", "Chất lượng 4K", "Hỗ trợ đa thiết bị"],
    price: "300.000 VNĐ/tháng",
    promotion: "Giảm 10% cho năm đầu tiên"
  },
];

function TelevisionInfor() {
  return (
    <div>
      <Header selectedKey="television" />
      <main className="inter1">
        <Television />
      </main>
      <div className='container'>

        <div className='mt-4'>
          <h2 className="text-center">Truyền hình Viettel</h2>
          <Row gutter={16}>
            {televisionProducts.map((product, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <Card
                  title={product.title}
                  bordered={false}
                  className="mb-4 custom-card" 
                >
                  <p>{product.description}</p>
                  <p><strong>Giá:</strong> {product.price}</p>
                  <p><strong>Khuyến mãi:</strong> {product.promotion}</p>
                  <ul>
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <Button block className="custom-button text-white bg-danger">
                    Đăng ký ngay
                  </Button>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        <div className='fqa'>
          <h2>Câu hỏi thường gặp</h2>
          <Collapse>
            <Panel header="1. Dịch vụ truyền hình Internet của Viettel có bao gồm các kênh nào?" key="1">
              <p>Dịch vụ truyền hình Internet của Viettel cung cấp nhiều kênh truyền hình trong nước và quốc tế, đáp ứng nhu cầu giải trí đa dạng của khách hàng.</p>
            </Panel>
            <Panel header="2. Tôi có thể xem truyền hình trên nhiều thiết bị không?" key="2">
              <p>Có, bạn có thể xem truyền hình Internet trên tivi, máy tính, smartphone và tablet thông qua ứng dụng Viettel TV.</p>
            </Panel>
            <Panel header="3. Làm thế nào để đăng ký dịch vụ truyền hình Internet của Viettel?" key="3">
              <p>Bạn có thể đăng ký dịch vụ truyền hình Internet của Viettel thông qua website chính thức hoặc liên hệ với tổng đài chăm sóc khách hàng để được hỗ trợ.</p>
            </Panel>
          </Collapse>

          <div className="mt-4">
            <h2>Thông tin thêm</h2>
            <p>Viettel cung cấp dịch vụ truyền hình Internet với chất lượng cao và tốc độ ổn định. Để biết thêm thông tin chi tiết, vui lòng truy cập trang web của Viettel hoặc liên hệ với bộ phận chăm sóc khách hàng.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TelevisionInfor;
