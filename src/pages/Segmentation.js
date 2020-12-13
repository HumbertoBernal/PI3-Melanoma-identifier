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
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom';
import Pdf from "react-to-pdf";

const Main = styled.main`
    margin-top: 100px;
`;

const ref = React.createRef();

const Segmentation = () => {
    const history = useHistory();
    const {email} = useContext(UserContext)
    const [data, setData] = useState({firstName: " ", lastName:" "})


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
            <div ref={ref}>
            <AppBar position="relative" color="default">
                <Toolbar>
                    <div className="d-flex justify-content-around">

                    <Typography variant="h6" color="inherit" noWrap>
                        Segmentación
                    </Typography>
                    <Button size="small" variant="contained" onClick={ () => history.replace("/clasificacion")}>
                            Clasificar
                     </Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Main>
                <Flex align={"center"} direction={"column"}>
                    <BasicInfo {...data}/>
                    <Flex align={"center"}>
                        <ImageBox titulo= "Imagen original" url={data.url} />
                        <ImageBox titulo= "Imagen segmentada" url="" />
                    </Flex>
                </Flex>
            </Main>
            </div>
            <Pdf targetRef={ref} scale={0.6} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
            </Pdf>
        </>
    );
};

export default Segmentation;