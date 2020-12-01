import React, {useContext, useEffect, useState} from 'react';
import { Flex, Box } from '@chakra-ui/core';
import BasicInfo from "../components/BasicInfo";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from '@emotion/styled';
import Image from "@chakra-ui/core/dist/Image";
import axios from "axios";
import {UserContext} from "../context/userContext";
import {checkUser, getToken} from "../service/magic";

const Main = styled.main`
    margin-top: 100px;
`;

const probabilidad= 74.8;


const Clasification = () => {
    const {email} = useContext(UserContext)
    const [data, setData] = useState({})

        useEffect(() => {
            const getData = async () => {
                const token = await getToken();
                const response = await axios({
                    method: 'post',
                    url: 'http://localhost:5000/getData',
                    data: {'email': email},
                    headers: {'Authorization': token}
                })
                setData(response.data)
            }
            getData()
        }, [])
    const nombre = `${data.firstName} ${data.lastName}`
    return (
        <>
            <AppBar position="relative" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Clasificación
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
                        <Box maxWidth={"350px"} p={"5"} pt={"4"} m={"2"} ml={"20"} overflow={"hidden"} rounded={"lg"} borderWidth={"1px"}>
                            <Box
                                p={"1"}
                                fontWeight="semibold"
                                lineHeight="tight"
                                bg={"tomato"}
                                rounded={"md"}
                                mb={"1"}
                            >
                                Probabilidad de  diagnóstico  melanoma
                            </Box>
                            <Typography  component="h3" variant="h3" w={"300px"} h={"300px"}>
                                {probabilidad}%
                              </Typography>
                            <Typography component="subtitle1" variant="subtitle1" >
                                La probabilidad de diagnostico de melanoma para el paciente {nombre} es {probabilidad}%
                              </Typography>
                        </Box>
                    </Flex>
                </Flex>
            </Main>
        </>
    );
};

export default Clasification;