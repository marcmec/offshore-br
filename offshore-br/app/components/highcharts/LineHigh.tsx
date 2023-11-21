'use client'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { useEffect, useState } from 'react';

interface IProps {
        title: string,
        nameVariation: string,
        y: string
        color: string
}


const High = ({ y, title, nameVariation, color }: IProps) => {
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
                        text: title,

                        style: {
                                color: '#ffffff',
                        },

                },
                legend: {
                        itemStyle: {
                          color: '#ffffff', // Defina a cor desejada para as legendas das séries
                        },
                        itemHoverStyle: {
                                color: color, // Cor do texto quando o mouse está sobre a legenda
                              },
                      },
                chart: {
                        type: "area", backgroundColor: '#1a1a1a',
                        style: {
                                color: '#ffffff',
                        },
                        // Adicionando a borda
                        border: '1px solid #333333',
                        zoomType: 'x', // Permite a seleção de intervalo de tempo no eixo x

                },
                xAxis: {
                        type: 'datetime', // Use o tipo 'datetime' para gráficos temporais
                        categories: data["tempo"],
                        labels: {
                                style: {
                                        color: '#ffffff',
                                },
                        },

                        tickInterval: 100, // Intervalo de dois dias em milissegundos

                },
                yAxis: {
                        title: {
                                text: nameVariation,

                        },
                        labels: {
                                style: {
                                        color: '#ffffff',
                                },
                        }
                },
                series: [{
                        data: data[y], lineWidth: 1,
                        name: nameVariation,
                        color: color, // Cor padrão

                        tooltip: {
                                valueDecimals: 2
                        }
                },],

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