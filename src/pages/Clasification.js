import React, {useContext, useEffect, useState} from 'react';
import { Flex, Box } from '@chakra-ui/core';
import BasicInfo from "../components/BasicInfo";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from '@emotion/styled';
import axios from "axios";
import {UserContext} from "../context/userContext";
import {getToken} from "../service/magic";
import ImageBox from '../components/ImageBox';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Main = styled.main`
    margin-top: 100px;
`;

const probabilidad= 74.8;

const Clasification = () => {
    const {email} = useContext(UserContext)
    const [data, setData] = useState({firstName: " ", lastName:" "})
    const history = useHistory();

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
    }, [email])

    const nombre = `${data.firstName} ${data.lastName}`
    return (
        <>
            <AppBar position="relative" color="default">
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Clasificación
                    </Typography>
                    <Button size="small" variant="contained" onClick={ () => history.replace("/segmentacion")}>
                            Segmentación
                     </Button>
                </Toolbar>
            </AppBar>
            <Main>
                <Flex align={"center"} direction={"column"}>
                    <BasicInfo {...data}/>

                    <Flex align={"center"}>
                        <ImageBox titulo= "Imagen original" url={data.url} />

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