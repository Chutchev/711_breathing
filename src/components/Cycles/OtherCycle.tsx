import "../../static/styles/otherCycle.css"
import {useEffect, useState} from "react";

interface IOtherCycle {
    current: number
}

function OtherCycle(props: IOtherCycle){
return <div className={"remain-current"}>
    <p className={"cycles"}>Оставшееся количество циклов</p>
    <div className={"numbers"}>
        <div className={"previous not-current"}>{!(props.current - 1 < 0)?props.current - 1:"Заканчиваем"}</div>
        <div className={"current"}>{props.current}</div>
        <div className={"next not-current"}>{props.current + 1}</div>
    </div>
</div>
}

export default OtherCycle