import React from "react"
import { Container, Row, Col } from "react-bootstrap";
import {FormWrapper} from "../../common/FormWrapper";
import {Socials} from "../Socials"

import footer from "./Footer.module.scss"


export const Footer =  () => {
    return (
        <div className={footer.Footer} data-anchor="contacts">
            <Container>
                <Row>
                    <Col
                        md={6}
                    >
                        <div className={footer.title}>
                            Будьте на связи с доктором
                        </div>
                        <div className={footer.contact}>
                            Звоните в любое время с 8:00 до 20:00
                        </div>
                        <div className={footer.contact}>
                            doctor.sharapov@gmail.com
                        </div>
                        <div className={footer.contact}>
                            +380 (67) 729-36-48
                        </div>
                        <div className={footer.contact}>
                            +380 (48) 700-54-03
                        </div>

                        <Socials/>

                    </Col>
                    <Col
                        md={6}
                    >
                        <div className={footer.callbackForm}>
                            <FormWrapper
                                withMessage
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>

    )
}