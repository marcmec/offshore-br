import { Line } from '@ant-design/plots';
import { useEffect, useState } from "react";

const LinePlot = () => {
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
                yField: 'pressao_interna',
                xAxis: {
                        tickCount: 3,
                      },
                      theme:"dark"

              };
            
        useEffect(() => {
                asyncFetch()
        }, []);


        return (
                <Line {...config} />)
}
export default LinePlot