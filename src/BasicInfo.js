import React from 'react';
import {Box, Image} from '@chakra-ui/core';
import Flex from "@chakra-ui/core/dist/Flex";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import nombre from "./Clasification";


const BasicInfo = () => {
    return (
        <React.Fragment>
            <Flex w={"70%"}>
                <Box p={5} color={"white"}>
                    <Image src={"person.jpg"} h={"100px"}/>
                </Box>
                <Flex >
                    <Typography variant="h6" color="inherit" >Nombre: </Typography> {nombre}
                    <Typography variant="h6" color="inherit" >Apellidos: </Typography>
                    <Typography variant="h6" color="inherit" >Correo electrónico: </Typography>
                    <Typography variant="h6" color="inherit" >Fecha de Nacimiento: </Typography>
                    <Typography variant="h6" color="inherit" >Distrito: </Typography>
                    <Typography variant="h6" color="inherit" >País: </Typography>
                    <Typography variant="h6" color="inherit" >Teléfono: </Typography>
                    <Typography variant="h6" color="inherit" >Grupo Sanguíneo: </Typography>
                    <Typography variant="h6" color="inherit" >Sexo: </Typography>
                    <Typography variant="h6" color="inherit" >Raza: </Typography>
                </Flex>
            </Flex>

        </ React.Fragment>
    );
};

export default BasicInfo;