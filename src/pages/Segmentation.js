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
import ReactToPdf from "react-to-pdf";
import Spinner from 'react-bootstrap/Spinner';

const Main = styled.main`
    margin-top: 100px;
`;

const ref = React.createRef();

const Segmentation = () => {
    const history = useHistory();
    const {email} = useContext(UserContext)
    const [data, setData] = useState({firstName: " ", lastName:" "})
    const [loading, setLoading] = useState(true);

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
            setLoading(false);
        }
        getData()
    }, [email])

    if (loading) {
        return (
          <div
            className="d-flex justify-content-center align-items-center"
            style={{ height: '100vh' }}
          >
            <Spinner animation="border" />
          </div>
        );
      }

    return (
            <div ref={ref}>
                <AppBar position="relative" color="default">
                    <Toolbar className="d-flex justify-content-between">
                        <div className="mx-2 ">
                            <Typography variant="h6" color="inherit" noWrap>
                                Segmentación
                            </Typography>
                        </div>
                        <div className="mx-2 ">
                            <Button className="mx-2" size="small" variant="contained" onClick={ () => history.replace("/clasificacion")}>
                                Clasificar
                            </Button>
                            <ReactToPdf targetRef={ref} scale={0.6} filename="code-example.pdf">
                                {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                            </ReactToPdf>
                        </div>
                    </Toolbar>
                </AppBar>
                <Main>
                    <Flex align={"center"} direction={"column"}>
                        <BasicInfo {...data}/>
                        <Flex align={"center"}>
                            <ImageBox titulo= "Imagen original" url={data.url? 'data:image/png;base64,' + data.url: "data:image/jpeg;base64,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" } />
                            <ImageBox titulo= "Imagen segmentada" url={data.segmented_url? 'data:image/png;base64,' + data.segmented_url: "data:image/jpeg;base64,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" } />
                        </Flex>
                    </Flex>
                </Main>
            </div>
    );
};

export default Segmentation;