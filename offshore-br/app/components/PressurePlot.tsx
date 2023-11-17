import { Gauge } from "@ant-design/plots";

const PressurePlot = () => {
  const config = {
    percent: 0.75,
    range: {
      color: 'l(0) 0:#B8E1FF 1:#ff0000',
    },
    startAngle: Math.PI,
    endAngle: 2 * Math.PI,
    indicator: null,
    statistic: {
      title: {
        offsetY: -36,
        style: {
          fontSize: '24px',
          color: '#4B535E',
        },
        formatter: () => '70Pa',
      },
      // content: {
      //   style: {
      //     fontSize: '24px',
      //     lineHeight: '44px',
      //     color: '#4B535E',
      //   },
      //   formatter: () => '',
      // },
    },
  };
  return <Gauge {...config} height={100}/>;
};

export default PressurePlot