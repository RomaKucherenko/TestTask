import React from 'react';
import classNames from "classnames";
import styles from "./Users.module.css";

function SortButton(props) {
    return (
        <div
            className={classNames(styles.SortById, {
                [styles.ByUp]: isSortByUp === true,
                [styles.ByDown]: isSortByUp === false
            })}
            onClick={onSortByIdClick}>
            Sort By Id
        </div>
    );
}

export default SortButton;