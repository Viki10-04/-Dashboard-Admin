import React from 'react';
import './Home.css';
import Features from '../../components/Features/Features'
import Chart from '../../components/Chart/Chart'
import WidgetSmall from '../../components/WidgetSmall/WidgetSmall'
import WidgetLarge from '../../components/WidgetLarge/WidgetLarge'

import {xAxisData} from '../../Data';

export default function Home() {
  return (
    <div className='Home'>
      <Features />
      <div className="ch">
              <Chart grid title='Month Sale' data={xAxisData} dataKey="Sale" />
      </div>
      <div className="HomeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>     
    </div>
  )
}
