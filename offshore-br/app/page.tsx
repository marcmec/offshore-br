'use client'

import { InfoCircleFilled } from "@ant-design/icons";
import { Button, Card, Form, Input, Layout, Space } from "antd"
import { Header, Footer, Content } from "antd/es/layout/layout"
import { useState } from "react";
import LoginComponent from "./components/LoginComponent";
import Link from "next/link";




const Login = () => {
        const tabList = [
                {
                        key: 'tab1',
                        tab: 'Admin',
                },
                {
                        key: 'tab2',
                        tab: 'Usuário',
                },
        ];
        const tabListNoTitle = [
                {
                        key: 'article',
                        label: 'article',
                },
                {
                        key: 'app',
                        label: 'app',
                },
                {
                        key: 'project',
                        label: 'project',
                },
        ];
        const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');
        const onTab1Change = (key: string) => {
                setActiveTabKey1(key);
        };
   
      
       
        return (

                <div style={{ height: '100vh', width: "100vw", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <Card
                                style={{ width: '336px' }}
                                title="Card title"
                                extra={<a href="#"><InfoCircleFilled /></a>}
                                tabList={tabList}
                                activeTabKey={activeTabKey1}
                                onTabChange={onTab1Change}
                        >
                                {activeTabKey1 === 'tab1' ? <LoginComponent/>:   <Link href={'/auth'}>
                                        <Button type="primary" htmlType="submit">Entrar</Button></Link>}
                        </Card>
                </div>
        )
}

export default Login