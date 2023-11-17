'use client'
import React, { useEffect, useState } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
interface FieldType {
        username?: string;
        password?: string;
        remember?: string;
};
const LoginComponent = () => {
        const onFinish = (values: any) => {
                console.log('Success:', values);
        };

        const onFinishFailed = (errorInfo: any) => {
                console.log('Failed:', errorInfo);
        };

        return (
                <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        style={{ maxWidth: 600 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                >
                        <Form.Item<FieldType>
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                                <Input />
                        </Form.Item>

                        <Form.Item<FieldType>
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                                <Input.Password />
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Link href={'/auth'}>
                                        <Button type="primary" htmlType="submit">
                                                Entrar
                                        </Button>
                                </Link>
                        </Form.Item>
                </Form>
        );
};

export default LoginComponent;