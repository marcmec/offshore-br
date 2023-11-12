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
                xField: 'depth',
                yField: 'id',
                xAxis: {
                        tickCount: 5,
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