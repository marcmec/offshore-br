'use client'
import { tempo } from '@/app/utils/data';
import { parseISO } from 'date-fns';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highstock';
import HighchartsExporting from 'highcharts/modules/exporting';
import { useEffect, useState } from 'react';

interface IProps {
        title: string,
        nameVariation: string,
        y: string
        color: string
}

if (typeof Highcharts === 'object') {
        HighchartsExporting(Highcharts)
}

const High = ({ y, title, nameVariation, color }: IProps) => {
        const [data, setData] = useState<any>([])
        const [dataFiltered,setDataFiltered]= useState<any>([])
        const asyncFetch = async () => {
                try {
                  const response = await fetch('saidas.json');
                  const json = await response.json();
                  setData(json);
                } catch (error) {
                  console.log('fetch data failed', error);
                }
              };
        const timestamps = tempo.map(date => new Date(parseISO(date)).getTime());



       
        useEffect(() => {
                asyncFetch()
                
        }, []);
        const datas = timestamps.map((timestamp, index) => [timestamp, data[y][index]]);
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
                rangeSelector: {
                      inputEnabled:true,
                        selected: 5, // Índice do botão selecionado por padrão (0 para 1y, 1 para All, neste exemplo)
                      },

                xAxis: {
                        type: 'datetime', // Use o tipo 'datetime' para gráficos temporais
                        labels: {
                                style: {
                                        color: '#ffffff',
                                },
                        },

                      scrollbar: {
                                enabled: true
                        },
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
                        data: datas, lineWidth: 1,
                        name: nameVariation,
                        color: color, // Cor padrão
                        negativeColor: "red",

                        tooltip: {
                                valueDecimals: 2
                        }
                },],


        }
     
        return (<div>
                <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                        constructorType={"stockChart"}

                />
        </div>)
}
export default High