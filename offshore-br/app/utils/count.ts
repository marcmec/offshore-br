import { IconBaseProps } from "@ant-design/icons/lib/components/Icon";

export const count = [
        {
                name: "New Orders",
                title: "$13,200",
                percent: "10%",
                icon: "bnb2",
        },
        {
                name: "New Orders",
                title: "$13,200",
                percent: "10%",
                icon: "bnb2",
        },
        {
                name: "New Orders",
                title: "$13,200",
                percent: "10%",
                icon: "bnb2",
        },
        {
                name: "New Orders",
                title: "$13,200",
                percent: "10%",
                icon: "bnb2",
        },
];


export interface IProps extends IconBaseProps {
        name: string,
        title: string,
        percent: string,
        icon: string
}