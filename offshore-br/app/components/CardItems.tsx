import { IconBaseProps } from "@ant-design/icons/lib/components/Icon"
import { Col, Row } from "antd"
import Card from "antd/es/card/Card"
import Title from "antd/es/typography/Title"
import { IProps } from "../utils/count"

const CardItems = ({name,title,percent,icon}:IProps)=>{

        return (
                <Card bordered={false} className="criclebox ">
                <div className="number">
                  <Row align="middle" gutter={[24, 0]}>
                    <Col xs={18}>
                      <span>{name}</span>
                      <Title level={3}>
                        {title} <small>{percent}</small>
                      </Title>
                    </Col>
                    <Col xs={6}>
                      <div className="icon-box">{icon}</div>
                    </Col>
                  </Row>
                </div>
              </Card>
        )
}

export default CardItems