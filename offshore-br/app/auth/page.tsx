'use client'
import React, { useEffect, useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  LogoutOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Card, Col, Layout, Menu, Row, theme } from 'antd';
import { Area } from '@ant-design/plots';
import AreaPlot from '../components/AreaTensionDepth';
import BarPlot from '../components/BarPlot';
import LinePlot from '../components/LinePlot';
import AreaTensionInteration from '../components/AreaTensionInteration';
import AreaTensionDepth from '../components/AreaTensionDepth';
import DemoTinyArea from '../components/TinyPlotArea';
import PressurePlot from '../components/PressurePlot';
import TemperatureRingPlot from '../components/TemperaturePlot';
import Link from 'next/link';
import High from '../components/highcharts/LineHigh';
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
  getItem('Logout', '2', <Link href="/">
    <LogoutOutlined />
  </Link>),

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
    <Layout style={{ minHeight: '100vh', backgroundColor: '#333333' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" items={items} />
      </Sider>
      <Layout style={{ backgroundColor: '#333333', color: "#ffffff" }}>
        <Header style={{ padding: 0, background: "#333333" }} />
        <Content style={{ margin: '0 16px', }}>
          <Breadcrumb style={{ margin: '16px 0', color: "#ffffff" }}>
            <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
            <Breadcrumb.Item>OffShore</Breadcrumb.Item>
          </Breadcrumb>
          {/* <Card style={{ margin: "8px", backgroundColor: "black", border: "0" }}> */}
          <Row style={{ justifyContent: "center", alignItems: "center", gap: 4,padding:"8px" }}>
          <Card style={{ width: '200px',height:'200px' }} title="Profundidade"
            >
              <h1>1500m</h1>
              
            </Card>
            <Card style={{ width: '200px', }} title="Pressão">

              <PressurePlot />
            </Card>
            <Card style={{ width: '200px',}} title="Corrente"
            >

              <DemoTinyArea />
            </Card>

            <Card style={{ width: '200px',height:'200px' }} title="Temperature (°C)"
            >
              <h1>15°C</h1>
            </Card>
            <Card style={{ width: '200px' }} title="Tensão de Saída"
            >

              <DemoTinyArea />
            </Card>
          </Row>
          {/* </Card> */}
          <Row gutter={[16,16]}>
      
            <Col span={12}>
              <High y='pressao_interna' title='Pressão Interna ao Longo do Tempo'  nameVariation='Pressão Interna'/>

            </Col> 
            <Col span={12}>
              <High y='diametro_externo' title='Diâmetro Externo Ao longo do Tempo' nameVariation='Diâmetro Externo' />
            </Col>
            <Col span={12}>
              <High y='espessura_parede' title='Espessura da Parede ao Longo do Tempo' nameVariation='Espessura da Parede'/>

            </Col> 
            <Col span={12}>
              <High y='profundidade_agua' title='Profundidade da Água Ao longo do Tempo'nameVariation='Profundidade da Água' />
            </Col>
            <Col span={12}>
              <High y='comprimento_riser' title='Comprimento Riser ao Longo do Tempo' nameVariation='Comprimento Riser' />

            </Col> 
            <Col span={12}>
              <High y='temperatura' title='Temperatura Ao longo do Tempo' nameVariation='Temperature (°C)'/>
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: "#333333", color: "#ffffff" }}>CATI-BR ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;