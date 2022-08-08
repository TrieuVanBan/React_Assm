import { Breadcrumb, Button, Col, Form, Input, InputNumber, message, Row, Select, Typography } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Option } from 'antd/lib/mentions';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { upload } from '../api/image';
import { createCategory, getAll, read, updateCategory } from '../api/category';
import UploadImage from '../components/UploadImage';

const UpdateCategory = () => {
	const { id } = useParams()
	// console.log(id);
	const [form] = Form.useForm();
	const getCates = async () => {
		const { data } = await read(id)
		form.setFieldsValue(data);
	}
	getCates()
	const [previewImage, setPreviewImage] = useState('')
	const [imageUrl, setImageUrl] = useState('')
	const navigate = useNavigate()
	const onFinish = async (values: any) => {
		console.log('Success:', values);
		try {
			await updateCategory(values, id)
			message.success("Cập nhật thành công")
			navigate('/admin/category')
		} catch (err) {
			message.error("Có lỗi xảy ra")
		}
	};
	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
	const handleChangeImage = (event: any) => {
		const file = event.target.files[0]
		console.log(file);

		const reader = new FileReader()
		reader.readAsDataURL(file)
		reader.onloadend = () => {
			setPreviewImage(reader.result)
		}
	}

	const uploadImage = async (base64Image: string) => {
		try {
			const res = await upload(base64Image)
			const data = res.data
			setImageUrl(data.url)
		} catch (err: any) {
			console.log(err);
			message.error(JSON.stringify(err.message))
		}
	}
	return (
		<>
			<Breadcrumb>
				<Typography.Title level={2} style={{ margin: 0 }}>
					Cập nhật tài khoản
				</Typography.Title>
			</Breadcrumb>
			<Row gutter={16}>
				<Col span={14}>
					<Form
						form={form}
						initialValues={{}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="on"
						labelCol={{ span: 24 }}
					>
						<Form.Item
							name="name"
							labelCol={{ span: 24 }}
							label="Email"
							rules={[{ required: true, message: 'Tên sản phẩm không được trống' }]}
						>
							<Input size="large" />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Cập nhật
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</>
	);
};

export default UpdateCategory