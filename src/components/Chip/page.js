import React from 'react'

const Page = (props) => {
    const {
        textValue,
        id,
        handleClick
    } = props;
    return (
        <div className="chip deep-orange lighten-3">
            <span>
                {textValue}&nbsp;{id}
            </span>
            <i 
                onClick={()=>{handleClick(0)}}
                className="close fas fa-times">
            </i>
        </div>
    )
}

export default Page
