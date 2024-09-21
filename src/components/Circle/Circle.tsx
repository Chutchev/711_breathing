import "../../static/styles/breath.css"
import {useEffect, useState} from "react";

function Circle(){
   const [timerValue, setTimerValue] = useState(7)
   let a = timerValue;
   useEffect(()=>{
      let timer: string | number | NodeJS.Timeout | undefined;
      timer = setInterval(() => {
         setTimerValue((timerValue) => {
            if (timerValue > 1) {
               timerValue = timerValue - 1
            } else {
               if (a == 7) {
                  timerValue = 11;
                  a = timerValue;
               } else {
                  timerValue = 7;
                  a = timerValue;
               }

            }
            return timerValue
         })
      }, 1000)
      return () => {clearInterval(timer)}
   }, [timerValue])
   return <div className={"breath-cirlce"}><div>{timerValue}</div></div>
}

export default Circle