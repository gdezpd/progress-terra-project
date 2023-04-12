import React from 'react';
import {DataType} from "../../app/App";
import moment from "moment";
import {ReactComponent as Fire} from "../../assets/fire.svg";
import {ReactComponent as Arrow} from "../../assets/arrow.svg";
import {Button} from "../Button/Button";

import s from './bonusesMenu.module.scss'

interface BonusesMenuType {
    data: DataType
    isData: boolean
    isError: boolean
    error: string
}

export const BonusesMenu = (
    {
        data,
        isError,
        isData,
        error
    }: BonusesMenuType
) => {
    const {
        currentQuantity,
        dateBurning,
        forBurningQuantity,
    } = data
    let currentDateBurning = moment(dateBurning).utc().format('MM.DD')

    if (isData) {
        return (
            <div className={s.wrapper}>
                <div className={s.containerBonuses}>
                    <div>
                        <div className={s.titleBonuses}> {currentQuantity} бонусов</div>
                        <div className={s.descrBonuses}>
                            <div>{currentDateBurning} сгорит</div>
                            <Fire className={s.fire}/>
                            <div>{forBurningQuantity} бонусов</div>
                        </div>
                    </div>

                    <Button className={s.arrow}> <Arrow/> </Button>

                </div>
                <div className={s.redBlock}/>
            </div>
        );
    } else return (
        <div className={s.wrapper}>
            {isError ? error : <h3>Loading...</h3>}
            <div className={s.redBlock}/>
        </div>
    );

};
