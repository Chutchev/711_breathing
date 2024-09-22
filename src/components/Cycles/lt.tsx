import {IAction} from "./gt";


function ArrowLeft(props: IAction){
    return (<div onClick={props.action} className={"arrow"}><svg width="60" height="60" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_0_1)">
            <circle cx="24" cy="20.7585" r="16" fill="#D9D9D9"/>
        </g>
        <path d="M27 25.7778L25.8102 26.7585L19.3296 21.4136C19.2252 21.328 19.1423 21.2261 19.0857 21.1139C19.0291 21.0017 19 20.8814 19 20.7599C19 20.6384 19.0291 20.5181 19.0857 20.4059C19.1423 20.2938 19.2252 20.1919 19.3296 20.1063L25.8102 14.7585L26.9989 15.7393L20.9164 20.7585L27 25.7778Z" fill="#090909"/>
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

export default ArrowLeft