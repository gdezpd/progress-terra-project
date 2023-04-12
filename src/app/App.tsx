import React, {useEffect, useState} from 'react';
import './App.scss';
import {getAccessToken, getBonuses} from "../api/api";
import axios from "axios";
import {StatusBar} from "../components/StatusBar/StatusBar";
import {Logo} from "../components/Logo/Logo";
import {BonusesMenu} from "../components/BonusesMenu/BonusesMenu";

interface ValidationError {
    message: string;
    errors: Record<string, string[]>
}

export interface DataType {
    currentQuantity: number
    dateBurning: string
    forBurningQuantity: number
    typeBonusName: string
}

function App() {

    const [error, setError] = useState('')
    const [data, setData] = useState<DataType>({} as DataType)
    const [isError, setIsError] = useState<boolean>(false)
    const [isData, setIsData] = useState<boolean>(false)

    useEffect(() => {
        (async () => {
            try {
                setIsData(false)
                const token = await getAccessToken()
                sessionStorage.setItem('accessToken', token)
                const data = await getBonuses(token)
                setData(data)
                setIsData(true)
            } catch (error) {
                setIsError(!isError)
                axios.isAxiosError<ValidationError, Record<string, unknown>>(error) && setError(error.message)
            }
        })();
    }, []);


    return (
        <div className="AppContainer">
            <div className="App">
                <StatusBar/>
                <Logo/>
                <BonusesMenu data={data} isError={isError} isData={isData} error={error}/>
            </div>
        </div>

    );
}

export default App;
