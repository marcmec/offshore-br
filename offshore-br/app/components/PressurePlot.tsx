import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Gauge } from '@ant-design/plots';

const PressurePlot = () => {
  const [pressure,setPressure]= useState(15.4)
  const config = {
    radius:1,
    percent: pressure*0.01,
    innerRadius: 0.9,
    range: {
      color: ['#30BF78', '#ff0000','' ],
    },
    axis: {
      label: {
        formatter(v:any) {
          return Number(v) * 100;
        },
      },
      subTickLine: {
        count: 5,
      },
    },
    indicator: {
      pointer: {
        style: {
          stroke: 'red',

        },
      },
      pin: {
        style: {
          stroke: 'black',
        },
        
      },
    },
    statistic: {
      content: {
        formatter:()=>`${pressure}Pa`,
        style: {
          fontSize: '12px',
          lineHeight: '12px',
          color:"black"
        },
      },
    },
  };
  return <Gauge {...config} height={100} />;
};

export default PressurePlot