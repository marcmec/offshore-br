import { Histogram } from '@ant-design/plots';
import { useEffect, useState } from "react";

const BarPlot = () => {
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
                binField: 'exit_tension',
                binWidth: 2,
                color:"",
                theme:"dark"
                
              };
            
        useEffect(() => {
                asyncFetch()
        }, []);


        return (
                <Histogram {...config} />)
}
export default BarPlot