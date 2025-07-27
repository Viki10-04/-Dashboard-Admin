import './Chart.css'
import React from 'react'
import {LineChart, Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';

export default function Chart({title, data, datakey, grid}) {
  return (
    <div className="chr">
      <div className="Chart">
          <h3 className="ChartTitle">{title}</h3>
          <ResponsiveContainer width="100%" height={300}>
              <LineChart data={data}>
                  <XAxis dataKey='name' stroke='#5550bd'/>
                  <Line type='monotone' dataKey='Sale' stroke='#5550bd'/>
                  <Tooltip/>
                  {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='10' />}
              </LineChart>
          </ResponsiveContainer>

      </div>
    </div>
  )
}
