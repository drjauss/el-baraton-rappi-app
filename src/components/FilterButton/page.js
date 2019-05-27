import React from 'react'

import './style.css';

const Page = (props) => {
    
    const {
        handleClick,
        dataTooltip,
        sortArrow,
        icon
    } = props;

    return (
        <button
            onClick={handleClick}
            className={"filterButton_margin waves-effect waves-light btn red tooltipped "+ (sortArrow === "fa-sort" ? "lighten-3":"lighten-1")}
            data-tooltip={dataTooltip}
            data-position="bottom">
            <i className={"fas "+ sortArrow}></i>
            &nbsp;
            <i className={"fas "+ icon}></i>
        </button>
    )
}

export default Page
