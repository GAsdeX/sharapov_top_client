import React, {useState} from "react";
import {Formik} from "formik";

import {Button} from "../Button";
import {Info} from "../Info";

import {sendMessage} from "../../../api/smtp";


export const FormWrapper = ({withMessage}) => {
    const [notification, setNotification] = useState(null)

    const onSubmit = async ({
                                name, lastName, email, message
                            }) => {
        setNotification("fetch")

        const values =
            withMessage
                ? {name, lastName, email, message}
                : {name, lastName, email}

        try {
            await sendMessage(values)
            setNotification("success")

        } catch (e) {
            setNotification("danger")
        }

        setTimeout(() => {
            setNotification(null)
        }, 5000)
    }

    const Notification = () => {

        if (notification === "success") {
            setNotification("success")
            return (
                <Info
                    type="success"
                >
                    Спасибо, ваше сообщение было успешно отправлено. Доктор свяжется с вами в ближайшее время.
                </Info>
            )
        }
        if (notification === "danger") {
            setNotification("danger")
            return (
                <Info
                    type="danger"
                >
                    Упс, что - то пошло не так... Попробуйте, пожалуйста, позже.
                </Info>
            )
        }
        return null;
    }

    return (
        <>
            <Formik
                initialValues={{name: "", lastName: "", email: "", message: ""}}
                onSubmit={onSubmit}
            >
                {({handleSubmit, handleChange, values}) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            onChange={handleChange}
                            value={values.name}
                            placeholder="Имя"
                        />
                        <input
                            type="text"
                            name="lastName"
                            onChange={handleChange}
                            value={values.lastName}
                            placeholder="Фамилия"
                        />
                        <input
                            type="text"
                            name="email"
                            onChange={handleChange}
                            value={values.email}
                            placeholder="E-mail"
                        />
                        {
                            withMessage &&
                            <textarea
                                name="message"
                                cols="30"
                                rows="10"
                                onChange={handleChange}
                                value={values.message}
                                placeholder="Сообщение"
                            />
                        }
                        <Button
                            isLoading={notification === "fetch"}
                        >
                            Отправить
                        </Button>
                    </form>
                )}
            </Formik>
            <div className="mt-3">
                <Notification/>
            </div>
        </>
    )
}