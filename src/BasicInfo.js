import React from 'react';
import {Box, Image} from '@chakra-ui/core';
import Flex from "@chakra-ui/core/dist/Flex";

const BasicInfo = () => {
    return (
        <>
            <Flex w={"70%"}>
                <Box p={5} color={"white"}>
                    <Image src={"person.jpg"} h={"100px"}/>
                </Box>
            </Flex>

        </>
    );
};

export default BasicInfo;