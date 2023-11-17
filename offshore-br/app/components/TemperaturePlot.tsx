import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { RingProgress } from '@ant-design/plots';

const TemperatureRingPlot = () => {
        const [temp, setTemp] = useState(15.7)
        const config = {
                height: 100,
                width: 100,
                autoFit: false,
                percent: temp * 0.01,
                color: ['#F4664A', '#E8EDF3'],
                innerRadius: 0.85,
                radius: 0.98,
                statistic: {
                        content: {
                                formatter: () => `${temp}°C`, style: {
                                        fontSize: '16px',
                                        lineHeight: '16px',
                                        color: "white"
                                },

                        }, title: {
                                style: {
                                        color: 'orange',
                                        fontSize: '12px',
                                        lineHeight: '12px',
                                },
                                formatter: () => 'Temperatura',
                        },
                }
        };
        return <RingProgress {...config} height={100}/>;
};

export default TemperatureRingPlot