import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, message } from 'antd'
import React from 'react'
import styled from "styled-components";
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../api/user';
import { userType } from '../types/userType';
import Logo2 from '../assets/anhhtus-logo 2.png'

type SignUpProps = {
  //   onSignup : (user: any) => void
}

const RegisterPage = (props: SignUpProps) => {
  const navigate = useNavigate();
  const onFinish = async (values: userType) => {
    await register(values);
    navigate("/login")
  }
  return (
    <div className="formm">
      <h3 className="h3">Đăng Ký</h3>
      <div className="formm1">
        <Form
          name="normal_login"
          className="login-form"
          style={{ width: "300px",margin: "auto", padding:"20px 0" }}
          onFinish={onFinish}
          initialValues={{ remember: true }}
        >
          <Form.Item
            label='Email Address'
            labelCol={{ span: 24 }}
            name="email"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            labelCol={{ span: 24 }}
            label='Phone Number'
            name="phone"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Số Điện Thoại" />
          </Form.Item>
          <Form.Item
            labelCol={{ span: 24 }}
            label='Password'
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Mật Khẩu"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }} className="login-form-button">
              Đăng Ký
            </Button><span style={{ marginTop: "10px" }}>Bạn Đã Có Tài Khoản?  </span>
            <br /><Link to="/login" className="">Đăng Nhập Ngay!</Link>
          </Form.Item>
        </Form>
        <Image>
          <Link to="/"> <Logo src={Logo2} /> </Link>
        </Image>
      </div>
    </div>
  )
}
const Image = styled.div`
margin-top: 50px
`
const Logo = styled.img`

`

export default RegisterPage