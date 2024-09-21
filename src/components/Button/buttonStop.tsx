import {MouseEventHandler} from "react";
import "../../static/styles/button.css"

interface IButton{
    title: string,
    action: MouseEventHandler<HTMLDivElement>
    class: string
}


function Button(props: IButton){
    return <div onClick={props.action} className={props.class}>{props.title}</div>
}

export default Button