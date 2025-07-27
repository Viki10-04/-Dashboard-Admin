import './Features.css'
import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {features} from './../../Data'


export default function Features() {
  return (
    <div className="Features">
        {features.map((feature) => 
            <div className="FeatureItem">
                <span className="FeatureTitle">{feature.title}</span>
                <div className="FeatureContainer">
                    <span className="FeatureMoney">{feature.amount}</span>

                    {feature.norp === 'Down' ? (
                        <ArrowDownwardIcon className={'FeatureIcon ' + feature.norp} />
                    ) : (
                        <ArrowUpwardIcon className={'FeatureIcon ' + feature.norp} />
                    )}
                </div>
                <span className="FeatureSub">{feature.p}</span>
            </div>
        )}
    </div>
  )
}
