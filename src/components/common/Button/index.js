import React from "react"
import classNames from "classnames"

import style from "./Button.module.scss"

export const Button = ({type, isLoading, children}) => (
    <button
        type={type}
        disabled={isLoading}
        className={classNames(style.Button, isLoading && style.isLoading)}
    >
        <div className={style.content}>
            {children}
        </div>
        <div className={style.loader}>
            <div className="loader">
                <div className="line-scale">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                </div>
            </div>
        </div>
    </button>
)