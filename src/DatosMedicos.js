import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel'
import FormControl from "@material-ui/core/FormControl";
import {makeStyles} from "@material-ui/core/styles";


export default function DatosMedicos() {
    return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="bloodType"
                        name="bloodType"
                        label="Grupo sanguíneo"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="sex"
                        name="sex"
                        label="Sexo"
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
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