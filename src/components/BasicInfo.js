import React from 'react';

import {Box, Button, Image, Text} from '@chakra-ui/core';
import Flex from "@chakra-ui/core/dist/Flex";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import nombre from "../pages/Clasification";

import Heading from "@chakra-ui/core/dist/Heading";
import Fields from "./Fields";

const BasicInfo = ({data}) => {
    const x = [{
        "Sexo": data.sex,
        "Fecha de nacimiento": data.date,
        "Grupo sanguíneo": data.bloodType
    }, {
        "Distrito": data.district,
        "Dept": "Dermatología",
        "Doctor asignado": "Alvaro"
    }];

    return (
        <React.Fragment>
            <Flex w={"70%"}>
                <Box p={5} color={"white"}>
                    <Image src={"images/person.jpg"} h={"100px"}/>
                </Box>
                <Flex w={"26%"} direction={"column"}>
                    <Heading as="h4" size="lg">
                        Paciente
                    </Heading>
                    <span style={{fontSize: "30px"}}>
                        {`${data.firstName} ${data.lastName}`}
                    </span>
                </Flex>
                <Flex flex={1} justify={"space-evenly"}>
                    <Fields fields={x[0]}/>
                    <Fields fields={x[1]}/>
                </Flex>
            </Flex>

        </ React.Fragment>
    );
};

export default BasicInfo;