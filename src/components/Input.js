import React from "react";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from 'yup'
import moment from "moment";

export const Input = (props) => {

    return (
        <Formik
            initialValues={{ time: props.initialValue}}
            validationSchema={props.validationSchema}

            onSubmit={(values) => {
                props.onSubmit(values.time)
            }}
        >
            {({errors, touched}) => (
                <Form className={'form'}>
                    <div className="form-group">
                        <label htmlFor="time">{props.label}</label>
                        <Field name="time" min={props.min} className={'form-control' + (errors.time && touched.time ? ' is-invalid' : '')} type={props.type} />
                        <ErrorMessage name="time" component="div" className="invalid-feedback" />
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Установить таймер</button>
                    </div>

                </Form>
            )}
        </Formik>
    )
}
