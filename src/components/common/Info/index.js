import React from "react";
import classNames from 'classnames'

import styles from "./Info.module.scss";

export const Info = ({type="success", children}) => (
    <div className={classNames(styles.Info, styles[type])}>
        {children}
    </div>
)