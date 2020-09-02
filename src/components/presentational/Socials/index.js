import React from "react"

import style from "./style.module.scss"

export const Socials = () => {

    return (
        <div className={style.socials}>
            <a target="_blank" href="https://www.facebook.com/igor.sharapov.1" className={`${style.social} ${style.facebook}`} />
            <a target="_blank" href="https://instagram.com/doctor.sharapov?igshid=84286trmg7kq" className={`${style.social} ${style.instagram}`}/>
        </div>
    )
}