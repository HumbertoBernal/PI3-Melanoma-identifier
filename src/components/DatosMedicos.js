import React, {useEffect, useRef} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {getToken} from "../service/magic";
import axios from 'axios'

export default function DatosMedicos({email, submitForm, type, submitted}) {
    const bloodType = useRef(null);
    const sex = useRef(null);
    const raza = useRef(null);

    useEffect(() => {
        async function handleSubmit() {
            if(submitForm) {
                const data = {
                    "bloodType": bloodType.current.value,
                    "sex": sex.current.value,
                    "raza": raza.current.value,
                    "email": email,
                    "type": type
                };
                console.log("datosmedicos data", data)
                const token = getToken()
                const response = await axios({
                    method: 'post',
                    url: 'http://localhost:5000/datosmedicos',
                    data: data,
                    headers: {'Authorization': token}
                })
                .catch(err => {
                    console.log('Hubo un error al enviar la data')
                  });
                console.log('response', response)
                submitted()
            }
        };
        handleSubmit();
    }, [email, submitForm, type])

    return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        inputRef={bloodType}
                        required
                        id="bloodType"
                        name="bloodType"
                        label="Grupo sanguíneo"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        inputRef={sex}
                        required
                        id="sex"
                        name="sex"
                        label="Sexo"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        inputRef={raza}
                        required
                        id="raza"
                        name="raza"
                        label="Raza"
                        fullWidth
                    />
                </Grid>
            </Grid>
    );
}