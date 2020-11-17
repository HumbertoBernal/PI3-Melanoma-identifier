import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/core/styles";


export default function AddressForm() {
    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Nombres"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Apellidos"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Correo electrónico"
                        fullWidth
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
                        type={"number"}
                        id="phone"
                        name="phone"
                        label="Teléfono"
                        fullWidth
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}