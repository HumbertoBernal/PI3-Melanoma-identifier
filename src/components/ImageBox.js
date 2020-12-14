import React from 'react';
import { Box } from '@chakra-ui/core';
import Image from "@chakra-ui/core/dist/Image";

const ImageBox = (props) => {
  
    return(
    <React.Fragment>
        <Box p={"5"} pt={"4"} m={"2"} mr={"20"} overflow={"hidden"} rounded={"lg"} borderWidth={"1px"}>
            <Box className="text-center"
                p={"1"}
                fontWeight="semibold"
                lineHeight="tight"
                bg={"tomato"}
                rounded={"md"}
                mb={"1"}
                >
                {props.titulo}
            </Box>
            <Image src={ props.url} w={"300px"} h={"300px"}/>
        </Box>
    </React.Fragment>)
}

export default ImageBox;