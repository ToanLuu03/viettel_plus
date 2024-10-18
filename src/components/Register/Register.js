import React from 'react';
import { Modal, Form, Input, Checkbox } from 'antd';
import './Register.css';

const Register = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();

    const handleOk = () => {
        form
            .validateFields()
            .then(values => {
                form.resetFields();
                onCreate(values);
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    return (
        <Modal
            className='register'
            visible={visible}
            title="Đăng Ký"
            okText="Đăng Ký"
            cancelText="Hủy"
            onCancel={onCancel}
            onOk={handleOk}
            okButtonProps={{ style: { backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' } }} 
            cancelButtonProps={{ style: { borderColor: '#ff4d4f' } }} 
        >
            <Form form={form} layout="vertical" name="register">
                <Form.Item
                    name="phone"
                    label="Số điện thoại"
                    rules={[
                        { required: true, message: 'Vui lòng nhập số điện thoại!' },
                        { pattern: /^[0-9]{10,12}$/, message: 'Số điện thoại không hợp lệ!' }
                    ]}
                >
                    <Input placeholder="Nhập số điện thoại" />
                </Form.Item>
                <Form.Item
                    name="otp"
                    label="Mã xác thực OTP"
                    rules={[{ required: true, message: 'Vui lòng nhập mã OTP!' }]}
                >
                    <Input placeholder="Nhập mã OTP" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Mật khẩu"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                >
                    <Input.Password placeholder="Nhập mật khẩu" />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    label="Xác nhận mật khẩu"
                    rules={[
                        { required: true, message: 'Vui lòng xác nhận mật khẩu!' },
                        { validator: (_, value) => {
                            if (!value || value === form.getFieldValue('password')) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('Mật khẩu xác nhận không khớp!'));
                        }}
                    ]}
                >
                    <Input.Password placeholder="Xác nhận mật khẩu" />
                </Form.Item>
                <Form.Item>
                    <Checkbox>
                        Quý khách đã đồng ý thực hiện mọi giao dịch theo Điều khoản sử dụng và Chính sách bảo mật của Viettel
                    </Checkbox>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default Register;
