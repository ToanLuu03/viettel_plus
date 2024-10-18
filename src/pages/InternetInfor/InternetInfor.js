import React from 'react';
import { Row, Col, Card, Button, Collapse } from 'antd'; 
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Internet from '../../components/Internet/Internet';
import './InternetInfor.css'; 

const { Panel } = Collapse;

function InternetInfor() {
  const subscriptions = [
    {
      title: 'STAR1',
      price: '210.000',
      details: [
        'Áp dụng tại 61 Tỉnh và ngoại thành HNI, HCM',
        'Phù hợp với khách hàng có nhu cầu',
      ],
    },
    {
      title: 'STAR2',
      price: '245.000',
      details: [
        'Áp dụng tại 61 Tỉnh và ngoại thành HNI, HCM',
        'Phù hợp với khách hàng có nhu cầu',
      ],
    },
    {
      title: 'STAR3',
      price: '299.000',
      details: [
        'Áp dụng tại 61 Tỉnh và ngoại thành HNI, HCM',
        'Phù hợp với khách hàng có nhu cầu',
      ],
    },
  ];

  return (
    <div>
      <Header selectedKey="internet" />
      <main className="inter1">
        <Internet />
      </main>
      <main className='container'>
        <section className="subscriptions-section">
          <h2 className="section-title">Gói cước hiện có</h2>
          <Row gutter={[16, 16]}>
            {subscriptions.map((subscription, index) => (
              <Col span={8} key={index}>
                <Card
                  hoverable
                  title={subscription.title}
                  bordered={false}
                  className="subscription-card"
                >
                  <p className="subscription-price">{subscription.price}đ/ tháng</p>
                  <ul className="subscription-details">
                    {subscription.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <div className="card-actions">
                    <Button type="primary" className="red-button">
                      Đăng ký ngay
                    </Button>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <div className='fqa'>
          <h2>Câu hỏi thường gặp</h2>
          <Collapse >
            <Panel header="1. Tốc độ Internet có ổn định không?" key="1">
              <p>Tốc độ Internet phụ thuộc vào gói cước bạn đã đăng ký. Chúng tôi cam kết cung cấp tốc độ ổn định và nhanh chóng.</p>
            </Panel>
            <Panel header="2. Tôi có thể nâng cấp gói cước sau khi đăng ký không?" key="2">
              <p>Vâng, bạn có thể nâng cấp gói cước của mình bất cứ lúc nào bằng cách liên hệ với bộ phận hỗ trợ khách hàng.</p>
            </Panel>
            <Panel header="3. Tôi cần làm gì nếu Internet bị gián đoạn?" key="3">
              <p>Nếu bạn gặp sự cố về kết nối, hãy thử khởi động lại modem. Nếu vấn đề vẫn tiếp diễn, hãy liên hệ với chúng tôi để được hỗ trợ.</p>
            </Panel>
          </Collapse>

          <div className="mt-4">
            <h2>Thông tin thêm</h2>
            <p>Chúng tôi cung cấp các gói Internet với tốc độ khác nhau, đáp ứng nhu cầu sử dụng của mọi khách hàng. Để biết thêm thông tin, vui lòng truy cập trang web của chúng tôi hoặc liên hệ với bộ phận chăm sóc khách hàng.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default InternetInfor;
