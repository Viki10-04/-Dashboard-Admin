import './Features.css'
import React from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';


export default function Features() {
  return (
    <div className="Features">
        <div className="FeatureItem">
            <span className="FeatureTitle">Revanue</span>
            <div className="FeatureContainer">
                <span className="FeatureMoney">$2,415</span>
                <span className="FeatureRate">
                    -11.4 <ArrowDownwardIcon className='FeatureIcon Down'/>
                </span>
            </div>
            <span className="FeatureSub">Compared to last month</span>
        </div>

        <div className="FeatureItem">
            <span className="FeatureTitle">Revanue</span>
            <div className="FeatureContainer">
                <span className="FeatureMoney">$2,415</span>
                <span className="FeatureRate">
                    -11.4 <ArrowDownwardIcon className='FeatureIcon Down'/>
                </span>
            </div>
            <span className="FeatureSub">Compared to last month</span>
        </div>

        <div className="FeatureItem">
            <span className="FeatureTitle">Revanue</span>
            <div className="FeatureContainer">
                <span className="FeatureMoney">$2,415</span>
                <span className="FeatureRate">
                    -11.4 <ArrowDownwardIcon className='FeatureIcon Down'/>
                </span>
            </div>
            <span className="FeatureSub">Compared to last month</span>
        </div>
    </div>
  )
}
