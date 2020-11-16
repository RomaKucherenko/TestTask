import React from "react";
import styles from "./FormControls.module.css"


export const Input = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched
    return (
        <>
            <div className={styles.Input}>
                <input {...input} {...props} className={hasError ? styles.Error : ""}/>
            </div>
            {hasError && <div>
                <span className={styles.ErrorSpan}>{meta.error}</span></div>}
        </>
    )
}

export const passwordInput = ({input, meta, ...props}) => {
    let hasError = meta.error && meta.touched
    const setType = () => {
        props.setType(
            props.type === "password" ? "text" : "password"
        )
    }
    return (
        <>
            <div className={styles.Input}>
                <input {...input} {...props} className={hasError ? styles.Error : ""}/>
                <span onClick={setType} className={styles.ShowLabel}>
                    Show
                </span>
            </div>
            {hasError && <div>
                <span className={styles.ErrorSpan}>{meta.error}</span>
            </div>}
        </>

    )
}