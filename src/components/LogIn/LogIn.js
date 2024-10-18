// LogIn.js
import React from 'react';
import { Modal, Form, Input, Button, Checkbox } from 'antd';

const LogIn = ({ visible, onLogin, onCancel }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form
            .validateFields()
            .then(values => {
                form.resetFields();
                onLogin(values);
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    return (
        <Modal
            visible={visible}
            title="Đăng Nhập"
            okText="Đăng Nhập"
            cancelText="Hủy"
            onCancel={onCancel}
            onOk={handleOk}
        >
            <Form form={form} layout="vertical" name="login">
                <Form.Item
                    name="account"
                    label="Tài khoản / Số điện thoại"
                    rules={[{ required: true, message: 'Vui lòng nhập tài khoản hoặc số điện thoại!' }]}
                >
                    <Input placeholder="Nhập tài khoản hoặc số điện thoại" />
                </Form.Item>
                <Form.Item
                    name="passwordOrOtp"
                    label="Mật khẩu / Mã OTP"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu hoặc mã OTP!' }]}
                >
                    <Input.Password placeholder="Nhập mật khẩu hoặc mã OTP" />
                </Form.Item>
                <Form.Item>
                    <Checkbox>
                        Ghi nhớ đăng nhập
                    </Checkbox>
                </Form.Item>
                <Form.Item>
                    <Button type="link" onClick={() => alert("QR code functionality coming soon!")}>
                        Đăng nhập bằng QR code
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default LogIn;
