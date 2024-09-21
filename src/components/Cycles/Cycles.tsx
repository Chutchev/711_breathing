import {MouseEventHandler} from "react";
import "../../static/styles/cycles.css"
import ArrowLeft from "./lt";
import ArrowRight from "./gt";
interface ICycles{
    current: number
    gt: MouseEventHandler<HTMLDivElement>
    lt: MouseEventHandler<HTMLDivElement>
    start: MouseEventHandler<HTMLDivElement>
}

function Cycles(props: ICycles) {
    return (<div className={"choose-cycles"}>
        <p>Выберите желаемое количество циклов</p>
        <div className={"interactive-menu"}>
            <ArrowLeft action={props.lt}></ArrowLeft>

            <div className={"count"}>
                <div className={"previous"}>{!(props.current - 1 < 0)?props.current - 1:""}</div>
                <div className={"current"}>{props.current}</div>
                <div className={"next"}>{props.current + 1}</div>
            </div>
            <ArrowRight action={props.gt}></ArrowRight>
        </div>
        <div onClick={props.start} className={"start-button"}>Старт</div>
    </div>)
}

export default Cycles