import React, {useEffect} from "react";

import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container";

import styles from "./Header.module.scss"

export const Header = ({isArticle}) => {

    useEffect(() => {
        const anchor = window.location.hash.replace('#','')
        const selector = document.querySelector(`[data-anchor="${anchor}"]`)

        if (!selector) return;

        setTimeout(() => {
            window.scrollTo({
                behavior: "smooth",
                top: selector.offsetTop
            })
        }, 300)

    }, [window.location.hash])

    return (
        <>
            <div
                className={styles.Header}
            >
                <Container>
                    <Link to="/#home">Главная</Link>
                    <Link to="/#about">О докторе</Link>
                    <Link to="/#services">Услуги</Link>
                    <Link to="/#results">Результаты</Link>
                    <Link to="/#faq">Пациенту</Link>
                </Container>
            </div>
            {
                isArticle &&
                <div className={styles.mediaHeader} >
                    <Link to="/" className={styles.backArrow}/>
                </div>
            }
        </>
    )
}