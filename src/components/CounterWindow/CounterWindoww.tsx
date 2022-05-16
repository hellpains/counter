import React from 'react';
import {Button} from "@mui/material";
import s from "./CounterWindoww.module.css";

type PropsType = {
    count: number
    maxValue: number
    startValue: number
    help: boolean
    incCount: () => void
    resetCount: () => void
    disabledButtonWindow: boolean
}

export const CounterWindow: React.FC<PropsType> = (
    {
        count,
        maxValue,
        startValue,
        help,
        incCount,
        resetCount,
        disabledButtonWindow,
    }
) => {

    const incHandler = () => {
        incCount()
    }
    const resetHandler = () => {
        resetCount()
    }

    let errorMax = startValue >= maxValue
    let errorStart = startValue < 0 || startValue >= maxValue

    return (
        <div className={s.windowBlock}>
            <div className={s.counterValue}>
                {errorMax || errorStart
                    ? <div style={{color: 'red'}}>Incorrect value!</div>
                    : <div>{help ? <div>enter values and press 'set'</div> :
                        <div className={count === maxValue ? s.maxValue : ''}>{count}</div>}</div>
                }
            </div>
            <div className={s.buttonBlock}>
                <div className={s.buttonJust}>
                    <span><Button size="small" variant="contained" disabled={count >= maxValue || disabledButtonWindow}
                                  onClick={incHandler}>inc</Button></span>
                    <span><Button size="small" variant="contained" disabled={count <= startValue || disabledButtonWindow}
                                  onClick={resetHandler}>reset</Button></span>
                </div>
            </div>
        </div>
    );
};
