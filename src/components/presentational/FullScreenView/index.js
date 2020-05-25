import React from 'react'
import classNames from 'classnames'

import style from './style.module.scss'

export const FullScrennView = ({children, className, title}) => (
    <div
        className={classNames(style['FullScreenView'], title && style['with-title'], className)}
    >
        {
            title 
            ? <>
                <div
                    className={style['title']}
                >
                    {title}
                    
                </div>
                <div
                    className={style['content']}
                >
                    {children}
                </div>
            </>
            : children
        }
    </div>
)