import { BellFilled, ClockCircleFilled, PrinterFilled, ProfileFilled, SaveFilled, SearchOutlined, SettingFilled } from "@ant-design/icons";
import { Avatar, Badge, Breadcrumb, Button, Col, Dropdown, Flex, List, Row, Segmented, Tooltip } from "antd"
import Input from "antd/es/input/Input";
import Link from "next/link";

const HeaderPerfil = () => {


        return (
                <Flex gap="large" align="flex-end" vertical>

                        <Flex justify={"center"} gap={"small"} align={"center"}>

                                <Input prefix={<SearchOutlined />} placeholder="Pesquise por dados" />

                                <Button type="link"><Breadcrumb><SaveFilled style={{ color: "white", fontSize: "24px" }}/></Breadcrumb></Button>
                                <Button type="link"><PrinterFilled style={{ color: "white", fontSize: "24px" }} /></Button>
                                <Button type="link"><SettingFilled style={{ color: "white", fontSize: "24px" }} /></Button>
                                
                        </Flex>
                </Flex>
        )
}

export default HeaderPerfil