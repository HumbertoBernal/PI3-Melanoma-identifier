import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';


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