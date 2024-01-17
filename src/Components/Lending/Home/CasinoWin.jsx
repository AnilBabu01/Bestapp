import React from 'react'
import Style from './CasinoWin.module.css'

const CasinoWin = () => {
  return (
    <>
    <div className={Style.casinoWin}>
        <div className={Style.casinoContact}>
            <p>Welcome To BESTEARNINGAPP</p>
            <h1>Play Online <br /> <span>Casino & Win </span> Money Unlimited</h1>
            <p>Play casino and earn crypto in online. The ultimate online casino platform.</p>
        </div>
        <div className={Style.casinoImage}>
            <img src="/images/erningImage.png" alt="" srcset="" />
        </div>
    </div>
    </>
  )
}

export default CasinoWin