import React, {useState} from "react";
import {ON_CHANGE} from "../ts/const/store-const";
import {convertTimeToStore} from "../ts/utils/clear-fuctions";
import store from "../store/store";
import moment from "moment";
import {Input} from "./Input";

export const SettingLeft = () => {

    function handleSubmit( value){
        store.dispatch({ type: ON_CHANGE, onChange: convertTimeToStore(moment(value)) })
        alert('Таймер установлен')
    }
    return (
        <Input
            initialValue = {moment().format('YYYY-MM-DD')}
            label = {'Укажите крайнюю дату'}
            min={moment().add( 1,'day').format('YYYY-MM-DD')}
            type="date"
            onSubmit = {handleSubmit}
        >

        </Input>
    )
}