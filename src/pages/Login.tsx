import React from 'react'
import styled from "styled-components";
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, message } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import {login} from "../api/user"
import Logo2 from '../assets/anhhtus-logo 2.png'
type Props = {

}

const LoginPage = (props: Props) => {
  const navigate = useNavigate()
  const onSubmit = async (data:any) => {
    const {data:user} = await login(data)
    localStorage.setItem('user',JSON.stringify(user))
    // alert("Bạn đã đăng nhập thành công!");
    navigate("/")
  }
  return (
    <div className="formm" >
      <h3 className="h3">Đăng nhập</h3>
      <div className="formm1">
        <Form
          onFinish={onSubmit}
          name="normal_login"
          className="login-form"
          style={{ width: "300px", margin: "auto", padding:"20px 0"}}
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="email"
            label='Email Address'
            labelCol={{ span: 24 }}
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            labelCol={{ span: 24 }}
            rules={[{ required: true, message: 'Please input your password!' }]}

          >
            <Input.Password className="mt-3"
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Mật Khẩu"
              iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" style={{ width: "100%" }} className=" mt-3 login-form-button">
              Đăng Nhập
            </Button><span style={{ marginTop: "10px" }}>Bạn Chưa Có Tài Khoản? </span>
            <br /><Link to="/register" className=""> Đăng Ký Ngay!</Link>
          </Form.Item>
        </Form>
        <Image>
          <Link to="/"> <Logo src= {Logo2} /> </Link>
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

export default LoginPage