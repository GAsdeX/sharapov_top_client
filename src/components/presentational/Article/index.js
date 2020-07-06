import React from "react"
import {Container, Row, Col} from "react-bootstrap";

import {FormWrapper} from "../../common/FormWrapper";
import {useHomePage} from "../../hooks/useHomePage";
import {Footer} from "../Footer";

import style from "./Article.module.scss"
import {Header} from "../Header";

export const Article = ({
    match: {
        params: {
            article
        }
    }
}) => {
    const {
        articles
    } = useHomePage()

    const entry = articles
        ? articles
            .find(({ServiceResults: [rules]}) => rules.id === Number(article))
        : null;

    return (
        <>
            <Header />
            <Container
                className={style.Article}
            >
                <Row>
                    <Col
                        md={8}
                    >
                        {
                            entry &&
                            <>
                                <span
                                    className={style.title}
                                >
                                    {entry.ServiceTitle}
                                </span>
                                 <p
                                     dangerouslySetInnerHTML={{__html: entry && entry.ServiceDescription}}
                                 />
                            </>
                        }

                    </Col>
                    <Col
                        md={4}
                    >
                        <FormWrapper
                            withMessage
                        />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>

    );
}