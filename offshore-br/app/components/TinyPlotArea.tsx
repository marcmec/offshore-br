import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { TinyArea } from '@ant-design/plots';

const DemoTinyArea = () => {
  const data = [
    264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492
  ];
  const config = {
    height: 100,
    autoFit: false,
    data,
    smooth: true,
    tooltip: false,
    annotations: [
      {
        type: 'line',
        start: ['min', 'mean'],
        end: ['max', 'mean'],
        text: {
          content: 'Limite Min',
          offsetY: -2,
          style: {
            textAlign: 'left',
            fontSize: 12,
            fill: 'orange',
            textBaseline: 'bottom',
          },
        },
        style: {
          stroke: 'rgba(0, 0, 0, 0.25)',
        },
      },
      {
        type: 'line',
        start: ['min', 800],
        end: ['max', 800],
        text: {
          content: 'Limite Max',
          offsetY: -2,
          style: {
            textAlign: 'left',
            fontSize: 10,
            fill: 'orange',
            textBaseline: 'bottom',
          },
        },
        style: {
          stroke: 'rgba(0, 0, 0, 0.55)',
        },
      },
    ],
  };
  return <TinyArea {...config}/>;
};

export default DemoTinyArea