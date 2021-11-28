import { useEffect, useState } from "react";

export default function Timer({initial,final}){
    const [timer,setTimer]=useState(initial);

    useEffect(()=>{
        const id=setInterval(()=>{
            setTimer((prev)=>{
                if(prev===final-1)
                {
                    clearInterval(id);
                }
                return prev+1;
            })
        },1000)
        return ()=>{
            clearInterval(id);
        }
    },[final])

    return(
        <>
          <div>Initial Time: {initial} Second</div>
          <div>Final Time: {final} Second</div>
          <h1>Timer: {timer} Sec</h1>
        </>
    )
}