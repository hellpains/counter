import React, {ChangeEvent} from 'react';
import s from './CounterSetting.module.css'
import {Button, TextField} from "@mui/material";

type PropsType = {
    maxValueChange: (str: string) => void
    setValue: () => void
    startValueChange: (str: string) => void
    maxValue: number
    startValue: number
    setError: (error: boolean) => void
    setHelp: (help: boolean) => void
    error: boolean
    disabledButtonSet: boolean
}
export const CounterSetting: React.FC<PropsType> = (
    {
        maxValue,
        startValue,
        setHelp,
        setValue,
        maxValueChange,
        startValueChange,
        disabledButtonSet,
    }
) => {

    const setHandler = () => {
        setValue()
    }

    const maxValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let str = String(e.currentTarget.value)
        maxValueChange(str)
    }

    const startValueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setHelp(true)
        let str = String(e.currentTarget.value)
        startValueChange(str)
    }


    let errorMax = startValue >= maxValue
    let errorStart = startValue < 0 || startValue >= maxValue || startValue < 0
    let setDis = disabledButtonSet
    let disabled = errorMax || errorStart || setDis

    return (
        <div className={s.settingBlock}>
            <div className={s.inputBlock}>
                <div className={s.input1}>
                    <TextField
                        color="secondary" focused
                        size={"small"}
                        id="outlined-basic"
                        label="Max value"
                        className={errorMax ? s.error : ''}
                        onChange={maxValueChangeHandler}
                        value={maxValue}
                        type="number"/>
                </div>
                <div className={s.input2}>
                    <TextField
                        color="secondary" focused
                        className={errorStart ? s.error : ''}
                        onChange={startValueChangeHandler}
                        value={startValue}
                        type="number"
                        size={"small"}
                        id="outlined-basic"
                        label="Start value"
                    />
                </div>
            </div>
            <div className={s.setButton}>
                <Button
                    color="secondary"
                    variant="contained" size="small" disabled={disabled} onClick={setHandler}>set</Button>
            </div>
        </div>
    );
};
