import { SaveFilled, SearchOutlined, SettingFilled } from "@ant-design/icons";
import { Breadcrumb, Button, Flex } from "antd";
import Input from "antd/es/input/Input";

const HeaderPerfil = () => {


        return (
                <Flex gap="large" align="flex-end" vertical>

                        <Flex justify={"center"} gap={"small"} align={"center"}>

                                <Input prefix={<SearchOutlined />} placeholder="Pesquise por dados" />

                                <Button type="link"><Breadcrumb><SaveFilled style={{ color: "white", fontSize: "24px" }}/></Breadcrumb></Button>
                                {/* <Button type="link"><PrinterFilled style={{ color: "white", fontSize: "24px" }} /></Button> */}
                                <Button type="link"><SettingFilled style={{ color: "white", fontSize: "24px" }} /></Button>
                                
                        </Flex>
                </Flex>
        )
}

export default HeaderPerfil