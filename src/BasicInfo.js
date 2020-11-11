import React from 'react';
import {Box, Button, Image, Text} from '@chakra-ui/core';
import Flex from "@chakra-ui/core/dist/Flex";
import Heading from "@chakra-ui/core/dist/Heading";
import Fields from "./Fields";

const BasicInfo = () => {
    const x = [{
        "Sexo": "Masculino",
        "Edad": 32,
        "Grupo sanguíneo": "B+"
    }, {
        "Check-in": "24 Feb, 2020",
        "Dept": "Dermatología",
        "Doctor asignado": "Alvaro"
    }, {
        "Área": "10.5 mm2",
        "Diámetro": "2 mm",
        "Perímetro": "3 mm"
    }];

    return (
        <>
            <Flex w={"70%"}>
                <Box p={5} color={"white"}>
                    <Image src={"person.jpg"} h={"100px"}/>
                </Box>
                <Flex w={"26%"} direction={"column"}>
                    <Heading as="h4" size="lg">
                        Patient
                    </Heading>
                    <span style={{fontSize: "30px"}}>
                        Mr. Jesse Wynn
                    </span>
                    <Button w={"50%"}>
                        VIEW PROFILE
                    </Button>
                </Flex>
                <Flex flex={1} justify={"space-evenly"}>
                    <Fields fields={x[0]}/>
                    <Fields fields={x[1]}/>
                    <Fields fields={x[2]}/>
                </Flex>
            </Flex>

        </>
    );
};

export default BasicInfo;