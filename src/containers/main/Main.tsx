import "../../static/styles/main.css";
import { useEffect, useState } from "react";
import Header from "../../components/Header/header";
import Modal from "../../components/Modal/Modal";
import Cycles from "../../components/Cycles/Cycles";
import Circle from "../../components/Circle/Circle";
import OtherCycle from "../../components/Cycles/OtherCycle";
import Button from "../../components/Button/buttonStop";

function Main() {
    const [isModalActive, setModalActive] = useState(false);
    const [current, setCurrent] = useState(4)
    const [isTimer, setIsTimer] = useState(false)
    const handleWhatIs = () => {
        setModalActive(true)
    }

    const CloseModel = () => {
        setModalActive(false)
    }

    const lt = () => {
        if (current != 0) {
            setCurrent(current => current - 1)
        }
    }

    const gt = () => {
        setCurrent(current => current + 1)
    }

    const start = () => {
        setIsTimer(true)
    }

    const stop = () => {
        setIsTimer(false)
    }
    useEffect(() => {
        let timer: string | number | NodeJS.Timeout | undefined;
        if (isTimer) {
            setTimeout(() => {
                setIsTimer(false)
                setCurrent(5)
            }, current * 18000)

            timer = setInterval(() => {
                lt()
            }, 18000)

        }
        return () => {clearInterval(timer)};
    }, [isTimer, current])

    return (<div className={"mainWindow"}>
        <Header WhatIs={handleWhatIs}></Header>
        {!isTimer && (<div className={"window-1"}>
            {isModalActive && (<Modal Close={CloseModel}></Modal>)}
            {!isModalActive && (<Cycles current={current} gt={gt} lt={lt} start={start}></Cycles>)}
        </div>)}
        {isTimer && (<div className={"window-2"}>
            <OtherCycle current={current}></OtherCycle>
            <Circle></Circle>
            <Button title={"Стоп"} action={stop} class={"button-stop"}></Button>
        </div>)}
    </div>)
}

export default Main;