import React, {useState} from "react";
import moment from "moment";
import store from "../store/store";
import {ON_CHANGE, TIME_CONST} from "../ts/const/store-const";
import {convertTimeToStore, convertTimeToView} from "../ts/utils/clear-fuctions";
import {Clear} from "./Clear";

export const Timer = () => {
    const [time, setTime] = useState((store.getState()?.value.time  - moment() || 0))

    let timeInterval = null
    React.useEffect(() => {
        if(store.getState()?.value.time){
            timeInterval =  setInterval(() => {
                setTime(store.getState()?.value.time - moment())
            }, 1000)
        }


return () => {
    clearInterval(timeInterval)
}
    }, [time]);

    function  clearTime() {
        setTime(0)
        store.dispatch({ type: ON_CHANGE, onChange: convertTimeToStore(0) })
        alert('Таймер сброшен')
    }



    return(
        <>
            <div className="jumbotron jumbotron-fluid">
                <h1 className="time">Осталось</h1>
                <div className="time">
                    <h2 className="display-4">Дней: {convertTimeToView(time).days}</h2>
                    <h2 className="display-4">Часов: {convertTimeToView(time).hours}</h2>
                    <h2 className="display-4">Минут: {convertTimeToView(time).minutes}</h2>
                    <h2 className="display-4">Секунд: {convertTimeToView(time).seconds}</h2>
                    {store.getState()?.value.time ?  <Clear
                    onClick={clearTime}></Clear> : null}
                </div>
            </div>
        </>



    )
}