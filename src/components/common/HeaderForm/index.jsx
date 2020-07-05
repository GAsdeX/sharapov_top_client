import React from "react"
import {FormWrapper} from "../FormWrapper";
import {Container} from "react-bootstrap";

import style from "./HeaderForm.module.scss"

export const HeaderForm = () => {

    return (
        <div className={style.HeaderForm}>
            <Container>
                <div className={style.title}>
                    Запишитесь на бесплатную консультацию
                </div>
                <div className={style.form}>
                    <FormWrapper/>
                </div>
            </Container>
        </div>
    )
}