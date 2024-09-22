import {MouseEventHandler} from "react";

export interface IAction{
    action: MouseEventHandler<HTMLDivElement>
}

function ArrowRight(props: IAction){
    return (<div onClick={props.action} className={"arrow"}><svg width="60" height="60" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_0_1)">
            <circle cx="24" cy="20.7585" r="16" fill="#D9D9D9"/>
        </g>
        <path d="M21 15.7393L22.1898 14.7585L28.6704 20.1035C28.7748 20.1891 28.8577 20.291 28.9143 20.4032C28.9709 20.5153 29 20.6357 29 20.7572C29 20.8787 28.9709 20.999 28.9143 21.1111C28.8577 21.2233 28.7748 21.3252 28.6704 21.4108L22.1898 26.7585L21.0011 25.7778L27.0836 20.7585L21 15.7393Z" fill="#090909"/>
        <defs>
            <filter id="filter0_d_0_1" x="0" y="0.758545" width="48" height="48" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="4"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape"/>
            </filter>
        </defs>
    </svg></div>)
}

export default ArrowRight