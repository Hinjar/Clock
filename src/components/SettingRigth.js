import React from "react";
import {ON_CHANGE} from "../ts/const/store-const";
import {convertTimeToStore} from "../ts/utils/clear-fuctions";
import store from "../store/store";
import moment from "moment";
import {Input} from "./Input";
import * as Yup from "yup";

export const SettingRigth = () => {

    const validationSchema = Yup.object().shape({
            time: Yup.number().min(1,'Минимальное значение 1')})

    function handleSubmit(value){
        store.dispatch({ type: ON_CHANGE, onChange: convertTimeToStore(moment().add(value, "hours")) })
        alert('Таймер установлен')
    }
    return (
        <Input
            initialValue = {0}
            label = {'Укажите количество часов'}
            type="number"
            onSubmit = {handleSubmit}
            validationSchema={validationSchema}
        >

        </Input>
    )
}