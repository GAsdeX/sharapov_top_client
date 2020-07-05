import React, {useState} from "react"
import {Container, Row, Col} from "react-bootstrap";
import classNames from "classnames";

import {FullScrennView} from "../../presentational/FullScreenView";

import style from "./FAQ.module.scss";


const Questions = ({faq, activeItem, setActiveItem}) => faq.map(({Question}, index) => (
    <div
        className={classNames(style.Question, activeItem === index && style.active)}
        onClick={() => setActiveItem(index)}
        key={Question}
    >
        {Question}
    </div>
))

const Answer = ({faq, acitveItem}) => (
    <div className={style.Answer}>
        {faq[acitveItem].Answer}
    </div>
)

export const FAQ = ({faq}) => {
    const [activeItem, setActiveItem] = useState(0)


    return (
        <FullScrennView
            title="Для пациента"
        >
            <div className={style.FAQ}>
                <Container>
                    <Row>
                        <Col
                            md={6}
                        >
                            {
                                faq &&
                                <Questions
                                    faq={faq}
                                    activeItem={activeItem}
                                    setActiveItem={setActiveItem}
                                />
                            }
                        </Col>
                        <Col
                            md={6}
                        >
                            {
                                faq &&
                                <Answer
                                    faq={faq}
                                    acitveItem={activeItem}
                                />
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </FullScrennView>
    )
}