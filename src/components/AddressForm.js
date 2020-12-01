import React, {useEffect, useRef} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from "@material-ui/core/FormControl";
import axios from 'axios';
import {getToken} from "../service/magic";

// type: true === segment
export default function AddressForm({email, submitForm, type}) {
    const firstName = useRef(null);
    const lastName = useRef(null);
    const date = useRef(null);
    const district = useRef(null);
    const number = useRef(null);

    useEffect(() => {
        async function handleSubmit() {
            const data = {
                "firstName": firstName.current.value,
                "lastName": lastName.current.value,
                "date": date.current.value,
                "number": number.current.value,
                "district": district.current.value,
                "type": type,
                "email": email
            };
            console.log("address data", data)
            const token = await getToken();
            const response = await axios({
                method: 'post',
                url: 'http://localhost:5000/address',
                data: data,
                headers: {'Authorization': token}
            })
            console.log("response", response)
        }
        handleSubmit();
    }, [submitForm])

    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        inputRef={firstName}
                        required
                        id="firstName"
                        name="firstName"
                        label="Nombres"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        inputRef={lastName}
                        required
                        id="lastName"
                        name="lastName"
                        label="Apellidos"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="email"
                        name="email"
                        label="Correo electrónico"
                        fullWidth
                        value={email}
                    />
                </Grid>
                <Grid item xs={12}>
                    <FormControl
                        fullWidth
                    >
                        <FormLabel
                            component={"legend"}
                            style={{"display": "flex"}}
                        >
                            Fecha de nacimiento
                        </FormLabel>
                        <TextField
                            inputRef={date}
                            type={"date"}
                            id="birthday"
                            name="birthday"
                            fullWidth
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        inputRef={district}
                        id="district"
                        name="district"
                        label="Distrito"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField id="state" name="state" label="País" fullWidth />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        inputRef={number}
                        type={"number"}
                        id="phone"
                        name="phone"
                        label="Teléfono"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </form>
    );
}
