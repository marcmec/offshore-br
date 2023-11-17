import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Liquid } from '@ant-design/plots';

const DemoLiquid = () => {
        const [depth, setDepth] = useState(0.76)
        const config = {
                color: '#76E4F7',
                width: 100,
                height: 100,
                outline: {
                        border: 1,
                        distance: 1,
                        style: {
                                stroke: '#C4F1F9'
                        }
                },
               
                liquidStyle: ({ depth }) => ({
                        fill: depth > 0.45 ? '#5B8FF9' : '#FAAD14',
                        stroke: depth > 0.45 ? '#5B8FF9' : '#FAAD14',
                })
        };
        return <Liquid percent={depth}{...config} />;
};

export default DemoLiquid