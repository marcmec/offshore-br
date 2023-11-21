'use client'
import {
  BellFilled,
  DashboardOutlined,
  GroupOutlined,
  LogoutOutlined,
  PlusOutlined,
  SaveFilled,
  SettingOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Badge, Breadcrumb, Col, Layout, Menu, Row, theme } from 'antd';
import React, { useState } from 'react';

import Link from 'next/link';
import CardItems from '../components/CardItems';
import HeaderPerfil from '../components/Header';
import High from '../components/highcharts/LineHigh';
import { count } from '../utils/count';
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
  getItem('Dashboard', '0', <DashboardOutlined />),
getItem("Adicionar Item",'1', <PlusOutlined/>),
  getItem('Risers', '3', <GroupOutlined />, [getItem('Riser 1', '6'), getItem('RIser 2', '8')]),  getItem('Configurações', '4', <SettingOutlined />),

  getItem('Notificações','5',<Badge size="small" count={4}  offset={[10,15]}>
  <BellFilled style={{ color: "white" }} />
</Badge>
),
  getItem('Logout', '2', <Link href="/">
  <LogoutOutlined />
</Link>),
];

const optionsDashboardMenu:MenuItem[] = [
  getItem(null,'1',<SaveFilled/>)
]
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
      <Layout style={{ backgroundColor: '#333333', color: "#ffffff", width:"100vw" }}>
        <Header style={{justifyContent:"end",justifyItems:"end",alignItems:"center",display:"flex"}}>
          <HeaderPerfil/>
        </Header>
        <Content style={{ margin: '0 16px', }}>
          <Breadcrumb style={{ margin: '16px 0', color: "#ffffff" }}>
            <Breadcrumb.Item>DashBoard</Breadcrumb.Item>
            <Breadcrumb.Item>OffShore</Breadcrumb.Item>
          </Breadcrumb>

          <Row className="rowgap-vbox" gutter={[24, 0] } style={{margin:"8px"}}>
          {count.map((c, index) => (
            <Col
              key={index}
              xs={24}
              sm={24}
              md={12}
              lg={6}
              xl={6}
              className="mb-24"
            >
            <CardItems {...c}/>
            </Col>
          ))}
        </Row>
    
          <Row gutter={[16, 16]}>

            <Col span={12}>
              <High y='pressao_interna' title='Pressão Interna ao Longo do Tempo' nameVariation='Pressão Interna' color='orange' />

            </Col>
            <Col span={12}>
              <High y='diametro_externo' title='Diâmetro Externo Ao longo do Tempo' nameVariation='Diâmetro Externo' color='purple' />
            </Col>
            <Col span={12}>
              <High y='espessura_parede' title='Espessura da Parede ao Longo do Tempo' nameVariation='Espessura da Parede' color='yellow' />

            </Col>
            <Col span={12}>
              <High y='profundidade_agua' title='Profundidade da Água Ao longo do Tempo' nameVariation='Profundidade da Água' color='blue' />
            </Col>
            <Col span={12}>
              <High y='comprimento_riser' title='Comprimento Riser ao Longo do Tempo' nameVariation='Comprimento Riser' color='green' />

            </Col>
            <Col span={12}>
              <High y='temperatura' title='Temperatura Ao longo do Tempo' nameVariation='Temperature (°C)' color='white' />
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: 'center', backgroundColor: "#333333", color: "#ffffff" }}>CATI-BR ©2023</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;