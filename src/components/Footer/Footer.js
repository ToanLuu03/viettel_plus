import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import './Footer.css';
import { FaPhone } from "react-icons/fa";
import viettel_tele from '../../assets/viettel_telepng.png'
import chplay from '../../assets/chplay.png'
import app_store from '../../assets/app_store.jpg'
const Footer = () => {
  return (
    <div>
      <div className="pt-4 footer-container container">

        <Row gutter={16}>
          <Col xs={24} md={12} className="footer-left">
            <h3>Phản Hồi Với Chúng Tôi Về Dịch Vụ Hoặc Trải Nghiệm Của Bạn</h3>
            <p>Chúng tôi sẽ luôn mang lại những trải nghiệm tốt nhất cho quý khách.</p>
            <p>Để được tư vấn, hãy gọi cho chúng tôi:
              <i> <FaPhone /></i>
              <strong> <a href='#1'>0949415422</a></strong></p>
            <p className='p3'>WEBSITE MUA SẮM ONLINE CHÍNH THỨC CỦA VIETTEL TELECOM.</p>
            <p className='p4'>Cơ quan chủ quản: Tổng Công ty Viễn thông Viettel (Viettel Telecom) -
              Chi nhánh Tập đoàn Công nghiệp - Viễn thông Quân đội. Mã số doanh nghiệp: 0100109106-011
              do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp lần đầu ngày 18/07/2005, sửa đổi lần thứ 15
              ngày 18/12/2018. Chịu trách nhiệm nội dung: Ông Cao Anh Sơn
            </p>
            <div>
              <span>
                © Viettel Telecom 2015. All rights reserved.</span>
            </div>
          </Col>
          <Col xs={24} md={12} className="footer-right">
            <Form layout="vertical">
              <Form.Item label="Họ và tên" name="name">
                <Input placeholder="Nhập họ và tên" />
              </Form.Item>
              <Form.Item label="Số điện thoại" name="phone">
                <Input placeholder="Nhập số điện thoại" />
              </Form.Item>
              <Form.Item label="Email" name="email">
                <Input type="email" placeholder="Nhập email" />
              </Form.Item>
              <Form.Item label="Phản hồi" name="feedback">
                <Input.TextArea rows={4} placeholder="Nhập phản hồi của bạn" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" className='bg-danger' htmlType="submit">Gửi</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
      <div className="internet-infor">
        <div className="info-section">
          <h2>HỖ TRỢ SAU BÁN ONLINE 24/7</h2>
          <h3>INTERNET - TRUYỀN HÌNH</h3>
          <div className="button-group">
            <Button className="custom-button" type="primary">Đóng Cước Trước</Button>
            <Button className="custom-button" type="primary">Hỗ Trợ Dịch Vụ</Button>
            <Button className="custom-button" type="primary">Thanh Toán</Button>
          </div>
        </div>
        <div className="app-section">
          <h2>TẢI NGAY ỨNG DỤNG MY VIETTEL</h2>
          <div className="app-images">
            <img width={50} src={viettel_tele} alt="My Viettel App" className="phone-image" />
          </div>
          <div className="store-buttons">
            <img src={chplay} alt="Google Play" className="store-icon" />
            <img src={app_store} alt="App Store" className="store-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
