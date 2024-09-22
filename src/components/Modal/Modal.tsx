import {MouseEventHandler} from "react";
import "../../static/styles/modal.css"

interface IModal {
    Close: MouseEventHandler<HTMLDivElement>
}

function Modal(props: IModal) {
    return (<div className={"modal"}>

        <div className={"info"}>
            <div className={"text"}>
                <p>Техника дыхания 7/11 - это простой способ снижения уровня тревоги и стресса, который
                    может быть полезен в кризисные моменты. Вот как правильно выполнить эту технику:</p>
                <p>Сядьте в удобное положение и расслабьтесь.</p>
                <ol>
                    <li>Полностью выдохните воздух из легких.</li>
                    <li>Вдохните через нос на счет 7.</li>
                    <li>Задержите дыхание на счет 1.</li>
                    <li>Выдохните через рот на счет 11.</li>
                </ol>
                <p>Повторите этот цикл в течение нескольких минут.</p>
                <p>Важно помнить, что при выполнении этой техники дыхания необходимо дышать медленно и глубоко, не
                    напрягая
                    мышцы грудной клетки. Если вам трудно выполнить эту технику, попробуйте начать с более коротких
                    периодов
                    задержки дыхания и постепенно увеличивайте время.</p>
            </div>

        </div>
        <div className={"X"} onClick={props.Close}><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 0.758545L13 12.7585M13 0.758545L1 12.7585" stroke="white" stroke-opacity="0.25" stroke-linecap="round"/>
        </svg>
        </div>
    </div>)
}

export default Modal