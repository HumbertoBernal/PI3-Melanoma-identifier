import React from 'react';
import { Flex, Box } from '@chakra-ui/core';
import BasicInfo from "./BasicInfo";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from '@emotion/styled';
import Image from "@chakra-ui/core/dist/Image";

const Main = styled.main`
    margin-top: 100px;
`;


const Segmentation = () => {
    return (
        <>
            <AppBar position="relative" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Segmentación
                    </Typography>
                </Toolbar>
            </AppBar>
            <Main>
                <Flex align={"center"} direction={"column"}>
                    <BasicInfo/>
                    <Flex align={"center"}>
                        <Box p={"5"} pt={"4"} m={"2"} mr={"20"} overflow={"hidden"} rounded={"lg"} borderWidth={"1px"}>
                            <Box
                                p={"1"}
                                fontWeight="semibold"
                                lineHeight="tight"
                                bg={"tomato"}
                                rounded={"md"}
                                mb={"1"}
                            >
                                Imagen original
                            </Box>
                            <Image src={"original.png"} w={"300px"} h={"300px"}/>
                        </Box>
                        <Box p={"5"} pt={"4"} m={"2"} ml={"20"} overflow={"hidden"} rounded={"lg"} borderWidth={"1px"}>
                            <Box
                                p={"1"}
                                fontWeight="semibold"
                                lineHeight="tight"
                                bg={"tomato"}
                                rounded={"md"}
                                mb={"1"}
                            >
                                Imagen segmentada
                            </Box>
                            <Image src={"segmented.png"} w={"300px"} h={"300px"}/>
                        </Box>
                    </Flex>
                </Flex>
            </Main>
        </>
    );
};

export default Segmentation;