import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useState } from 'react';

interface IProps{
        title:string,
        nameVariation:string,
        y:string
}

const High = ({y,title,nameVariation}:IProps) => {
        const [data, setData] = useState<any>([])
       
        const asyncFetch = async () => {
                await fetch('saidas.json')
                        .then((response) => response.json())
                        .then((json) => setData(json))
                        .catch((error) => {
                                console.log('fetch data failed', error);
                        });
        };

        const options = {
                title: {
                        text: title
                },
                xAxis: {
                        categories: data["tempo"],
                      },
                      yAxis: {
                        title: {
                            text: nameVariation
                        }
                    },
                series: [{
                        data: data[y],lineWidth: 0.777,
                        name: nameVariation

                }]
        }

        useEffect(() => {
                asyncFetch()
        }, []);

        return (<div>
                <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                />
        </div>)
}
export default High