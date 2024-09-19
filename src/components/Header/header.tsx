import {MouseEventHandler} from "react";

interface IHeader{
    WhatIs: MouseEventHandler<HTMLDivElement>
}

function Header(props: IHeader) {

    return (<div className={"header"}>
        <h1>Техника дыхания <div className={"technique-title"} onClick={props.WhatIs}>7:11</div></h1>
    <hr></hr>
    </div>)
}

export default Header