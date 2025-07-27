import './WidgetLarge.css'
import React from 'react'
import {transactions} from './../../Data'

export default function WidgetLarge() {

  const Button = ({type}) => {
    return <button className={'WidgetLargeButton ' + type}>{type}</button>
  }

  return (
    <div className="WidgetLarge">
      <h3 className="WidgetLargeTitle">Lastest TransAction</h3>
      <table className="WidgetLargeTable">
        <tr className="WidgetLargetr">
          <th className="WidgetLargeth">Customer</th>
          <th className="WidgetLargeth">Date</th>
          <th className="WidgetLargeth">Amout</th>
          <th className="WidgetLargeth">Status</th>
        </tr>
        {transactions.map((transaction) => (
          <tr key={transaction.id} className="WidgetLargetr">
            <td className="WidgetLargeUser">
              <img src={transaction.profile} alt="profile" className="WidgetLargeImg"/>
              <span className='WidgetLargeName'>{transaction.customer}</span>
            </td>
            <td className="WidgetLargeDate">{transaction.date}</td>
            <td className="WidgetLargeAmount">{transaction.amount}</td>
            <td className="WidgetLargeStatus"><Button type={transaction.status}/></td>
          </tr>
        ))}
      </table>
    </div>
  )
}
