import React, {useState} from 'react';
import s from './CounterContainer.module.css'
import {AppStateType} from "../../bll/store";
import {incCountAC, setMaxCountAC, setStartCountAC, setValueAC} from "../../bll/counter-reducer";
import {useDispatch, useSelector} from "react-redux";
import {CounterSetting} from "../CounterSetting/CounterSetting";
import {CounterWindow} from "../CounterWindow/CounterWindoww";

export const CounterContainer = () => {
    let count = useSelector<AppStateType, number>(store => store.counter.count)
    let startValue = useSelector<AppStateType, number>(store => store.counter.startValue)
    let maxValue = useSelector<AppStateType, number>(store => store.counter.maxValue)
    const dispatch = useDispatch()


    let [help, setHelp] = useState(false)
    let [error,setError] = useState(false)
    let [disabledButtonSet,setDisabledButtonSet] = useState(true)
    let [disabledButtonWindow,setDisabledButtonWindow] = useState(false)


    const setValue = () => {
        setHelp(false)
        // setCount(startValue)
        dispatch(setValueAC())
        setDisabledButtonSet(true)
        setDisabledButtonWindow(false)
    }



    const maxValueChange = (str: string) => {
        setDisabledButtonSet(false)
        setDisabledButtonWindow(true)
        setHelp(true)
        dispatch(setMaxCountAC(JSON.parse(str)))
    }

    const startValueChange = (str: string) => {
        setDisabledButtonWindow(true)
        setDisabledButtonSet(false)
        setHelp(true)
        dispatch(setStartCountAC(Number(str)))
    }

    const incCount = () => {
        dispatch(incCountAC())
    }
    const resetCount = () => {
        dispatch(setValueAC())
    }


    return (
        <div className={s.counterBlock}>
            <CounterSetting
                disabledButtonSet={disabledButtonSet}
                setHelp={setHelp}
                setError={setError}
                startValue={startValue}
                maxValueChange={maxValueChange}
                startValueChange={startValueChange}
                setValue={setValue}
                maxValue={maxValue}
                error={error}
            />

            <CounterWindow
                disabledButtonWindow={disabledButtonWindow}
                startValue={startValue}
                incCount={incCount}
                resetCount={resetCount}
                help={help}
                maxValue={maxValue}
                count={count}
            />
        </div>
    );
};
