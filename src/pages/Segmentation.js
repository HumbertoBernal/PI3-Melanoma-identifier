import React, {useContext, useEffect, useState} from 'react';
import { Flex } from '@chakra-ui/core';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import styled from '@emotion/styled';

import BasicInfo from "../components/BasicInfo";
import ImageBox from "../components/ImageBox";
import axios from 'axios';
import {UserContext} from "../context/userContext";
import {getToken} from "../service/magic";

const Main = styled.main`
    margin-top: 100px;
`;

const Segmentation = () => {
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
    }, [email])

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
                    <BasicInfo {...data}/>
                    <Flex align={"center"}>
                        <ImageBox titulo= "Imagen original" url={data.url} />
                        <ImageBox titulo= "Imagen segmentada" url={data.url} />
                    </Flex>
                </Flex>
            </Main>
        </>
    );
};

export default Segmentation;