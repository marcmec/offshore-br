'use client'
import React, { useEffect, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Col, Layout, Menu, Row, theme } from 'antd';
import { Area } from '@ant-design/plots';
import AreaPlot from './components/AreaTensionDepth';
import BarPlot from './components/BarPlot';
import LinePlot from './components/LinePlot';
import Areaplt from './components/AreaTensionInteration';
import AreaTensionInteration from './components/AreaTensionInteration';
import AreaTensionDepth from './components/AreaTensionDepth';
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Dashboard', '1', <PieChartOutlined />),
  // getItem('Option 2', '2', <DesktopOutlined />),
  // getItem('User', 'sub1', <UserOutlined />, [
  //   getItem('Tom', '3'),
  //   getItem('Bill', '4'),
  //   getItem('Alex', '5'),
  // ]),
  // getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  // getItem('Files', '9', <FileOutlined />),
];

const Home = () => {
  const [collapsed, setCollapsed] = useState(false);


  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh',backgroundColor:'#333333'}}>
      <Sider  collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark"  mode="inline" items={items} />
      </Sider>
      <Layout style={{ backgroundColor:'#333333',color:"#ffffff"}}>
        <Header style={{ padding: 0, background: "#333333" }} />
        <Content style={{ margin: '0 16px',}}>
          <Breadcrumb style={{ margin: '16px 0',color:"#ffffff" }}>
            <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
            <Breadcrumb.Item>OffShore</Breadcrumb.Item>
          </Breadcrumb>

          <Row gutter={[16, 16]}>
            <Col span={12}>
              <AreaTensionInteration />
            </Col>
            <Col span={12}>
              <BarPlot />
            </Col>
            <Col span={12}>
              <AreaTensionDepth />

            </Col>
            <Col span={12}>
              <LinePlot />
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center',backgroundColor:"#333333",color:"#ffffff"}}>CATI-BR ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;