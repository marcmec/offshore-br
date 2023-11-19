import { Area } from "@ant-design/plots";
import { useEffect, useState } from "react";

const AreaTensionDepth = () => {
  const [data, setData] = useState([])

  const asyncFetch = async () => {
    await fetch('saidas.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };
  const config = {
    data,
    xField: 'tempo',
    yField: 'exit_tension',
    seriesField: 'Tensão e Profundidade',
    xAxis: {
      range: [0, 1],
    },
    
    areaStyle: () => {
      return {
        fill: 'l(270) 0:#ffffff 0.5:#7ec2f3 1:#1890ff',
      };
    }, theme: "dark"

  };

  useEffect(() => {
    asyncFetch()
  }, [])
  return (
    <Area {...config} />
  )
}

export default AreaTensionDepth