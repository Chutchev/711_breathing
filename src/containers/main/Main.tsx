import "../../static/styles/main.css"
import Header from "../../components/Header/header";
import Modal from "../../components/Modal/Modal";
import {useState} from "react";


function Main() {
    const [isModalActive, setModalActive] = useState(false);
    const handleWhatIs = () => {
        setModalActive(true)
    }

    const CloseModel = () => {
        setModalActive(false)
    }


    return (<div className={"mainWindow"}>
        <Header WhatIs={handleWhatIs}></Header>
        {isModalActive && (<Modal Close={CloseModel}></Modal>) }
    </div>)
}

export default Main;