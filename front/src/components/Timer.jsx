import React from 'react'
import { useState, useEffect } from 'react';


const Timer = ({initialSeconds, initialMinutes, puntero, buscarPregunta, submitTest}) => {

    const [ minutes, setMinutes ] = useState(initialMinutes);
    const [seconds, setSeconds ] =  useState(initialSeconds);
    useEffect(()=>{
    let myInterval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    alert("Te has quedado sin tiempo, el test avanzará automáticamente") 
                    buscarPregunta()
                    puntero >= 9 && submitTest()
                    clearInterval(myInterval)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            } 
        }, 1000)
        return ()=> {
            clearInterval(myInterval);
          };
    });

    useEffect(()=>{
        setMinutes(initialMinutes)
        setSeconds(initialSeconds)
    },[puntero])

    return (
        <div >
        
            <h1 className="my-element"> {minutes}:{seconds < 10 ?  `0${seconds}` : seconds}</h1> 
        
        </div>
    )
}

export default Timer;