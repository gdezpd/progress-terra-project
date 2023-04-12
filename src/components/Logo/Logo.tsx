import React from 'react';
import {Button} from "../Button/Button";
import {ReactComponent as InformationButton} from "../../assets/informationButton.svg";

import s from './logo.module.scss'

export const Logo = () => {
    return (
        <div className={s.wrapper}>
            <div>ЛОГОТИП</div>
            <Button> <InformationButton/> </Button>
        </div>
    );
};
