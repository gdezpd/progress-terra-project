import React from 'react'
import s from './statusBar.module.scss'
import {ReactComponent as Charger} from '../../assets/charger.svg'
import {ReactComponent as Bluetooth} from '../../assets/bluetooth.svg'

export const StatusBar = () => {
    const app = ['Figma']
    const stripes = [1, 2, 3, 4, 5]

    let date = new Date();
    let formatter = new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "numeric",
    });

    return (
        <div className={s.wrapper}>
            <div className={s.connectionContainer}>
                <ul className={s.connection}>
                    {stripes.map((el, index) => <li className={s.li} key={index}/>)}
                </ul>
                <div className={s.app}>
                    {app}
                </div>
            </div>
            <div className={s.time}>
                {formatter.format(date)}
            </div>
            <div className={s.powerContainer}>
                <div className={s.bluetooth}>
                    <Bluetooth/>
                </div>
                <div className={s.chargingAmount}>
                    42%
                </div>
                <div className={s.charging}>
                    <Charger/>
                </div>
            </div>
        </div>
    );
};