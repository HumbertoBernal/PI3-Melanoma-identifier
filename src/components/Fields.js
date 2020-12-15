import React from 'react';
import Field from "./Field";
import {Flex} from "@chakra-ui/core";

const Fields = (props) => {
    let fields = [];

    for (let [key, value] of Object.entries(props.fields)) {
        fields.push({"fieldName": key, "value": value});
    }

    return (
        <Flex direction={"column"}>
            {fields.map(e => {return <Field key={e["fieldName"]} fieldName={e["fieldName"]} value={e["value"]}/>})}
        </Flex>
    );
};

export default Fields