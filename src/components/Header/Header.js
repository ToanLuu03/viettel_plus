// Header.js
import React, { useState } from "react";
import { Menu, Button, Drawer } from "antd";
import './Header.css';  // External CSS file
import { useNavigate } from 'react-router-dom';
import { PATH_NAME } from "../../constants/PATH_NAME";
import Register from "../Register/Register";
import LogIn from "../LogIn/LogIn";
const { SubMenu } = Menu;

const items = [
  {
    key: "data",
    label: "Dịch vụ di động",
    subItems: [
      { key: "1", label: "Gói cước Data" },
      { key: "2", label: "Gói cước Thoại/SMS" },
      { key: "3", label: "Mua sim số" },
      { key: "4", label: "Chuyển sang trả sau" },
      { key: "5", label: "Chuyển mạng giữ số" },
      { key: "6", label: "Gói cước chính" },
      { key: "7", label: "Dịch vụ GTGT" },
      { key: "8", label: "Dịch vụ quốc tế" },
    ],
  },
  {
    key: "viettelPlus",
    label: "Viettel++",
    subItems: [
      { key: "9", label: "Giới thiệu Viettel++" },
      { key: "10", label: "Thông tin hội viên" },
      { key: "11", label: "Ưu đãi chương trình" },
      { key: "12", label: "Trở thành đối tác Viettel++" },
    ],
  },
  {
    key: "internet",
    label: "Internet",
  },
  {
    key: "cam",
    label: "Camera",
  },
  {
    key: "television",
    label: "Truyền hình",
  },
  {
    key: "support",
    label: "Hỗ trợ khách hàng",
  },
];

const Header = ({ selectedKey }) => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false); 
  const [registerVisible, setRegisterVisible] = useState(false); 
  const [loginVisible, setLoginVisible] = useState(false); 
  const handleMenuClick = (key) => {
    if (key === "internet") {
      navigate(PATH_NAME.INTERNET);
    } else if (key === "cam") {
      navigate(PATH_NAME.CAM);
    } else if (key === "television") {
      navigate(PATH_NAME.TELEVISION);
    }
  };
  const showLoginModal = () => {
    setLoginVisible(true);
  };

  const handleLogin = (values) => {
    console.log('Received values of login form: ', values);
    setLoginVisible(false); 
  };

  const handleLoginCancel = () => {
    setLoginVisible(false);
  };
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const showRegisterModal = () => {
    setRegisterVisible(true);
  };

  const handleRegisterCreate = (values) => {
    console.log('Received values of register form: ', values);
    setRegisterVisible(false); 
  };

  const handleRegisterCancel = () => {
    setRegisterVisible(false);
  };

  return (
    <div className="header-container">
      <div className="logo">
        <a href='/'>VIETTEL</a>
      </div>
      <div className="menu-wrapper">
        <Menu mode="horizontal" selectedKeys={[selectedKey]} className="menu-items" selectable={false}>
          {items.map(item => (
            item.subItems ? (
              <SubMenu key={item.key} title={item.label}>
                {item.subItems.map(subItem => (
                  <Menu.Item style={{ width: 200 }} key={subItem.key} onClick={() => handleMenuClick(subItem.key)}>
                    {subItem.label}
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item key={item.key} onClick={() => handleMenuClick(item.key)}>
                {item.label}
              </Menu.Item>
            )
          ))}
        </Menu>
        <Button className="mobile-menu-button" onClick={showDrawer}>
          ☰
        </Button>
      </div>

      <Button type="primary" className="register-btn bg-danger" style={{ marginRight: "10px" }} onClick={showRegisterModal}>
        Đăng ký
      </Button>
      <Button className="login-btn bg-light" onClick={showLoginModal}>
        Đăng nhập
      </Button>
      <Register
        visible={registerVisible}
        onCreate={handleRegisterCreate}
        onCancel={handleRegisterCancel}
      />
      <LogIn
        visible={loginVisible}
        onLogin={handleLogin}
        onCancel={handleLoginCancel}
      />
      {/* Drawer for mobile view */}
      <Drawer title="Menu" placement="right" onClose={onClose} visible={visible}>
        <Menu mode="vertical" className="menuList" selectable={false}>
          {items.map(item => (
            item.subItems ? (
              <SubMenu key={item.key} title={item.label}>
                {item.subItems.map(subItem => (
                  <Menu.Item key={subItem.key} onClick={() => handleMenuClick(subItem.key)}>
                    {subItem.label}
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item key={item.key} onClick={() => handleMenuClick(item.key)}>
                {item.label}
              </Menu.Item>
            )
          ))}
        </Menu>
      </Drawer>
    </div>
  );
};

export default Header;
