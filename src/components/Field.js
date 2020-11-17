import React from 'react';

const Field = (props) => {
    return (
        <>
            <span style={{color: "gray"}}>
                {props.fieldName}
            </span>
            <span>
                {props.value}
            </span>
        </>
    );
};

export default Field;