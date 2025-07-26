import React from 'react';
import './Home.css';
import Features from '../../components/Features/Features'
import Chart from '../../components/Chart/Chart'
import WidgetSmall from '../../components/WidgetSmall/WidgetSmall'

import {xAxisData} from '../../Data';

export default function Home() {
  return (
    <div className='Home'>
      <Features />
      <Chart grid title='Month Sale' data={xAxisData} dataKey="Sale"/>
      <div className="HomeWidgets">
      <WidgetSmall />
      </div>     
    </div>
  )
}
