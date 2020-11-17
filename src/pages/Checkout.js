import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { logoutUser } from '../service/magic';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import DatosMedicos from "../components/DatosMedicos";
import Preview from "../components/Preview";
import Copyright from "../components/Copyright";

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 900,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

const Checkout = () => {
    const { email } = useContext(UserContext);
    const history = useHistory();

    const handleLogOut = async () => {
        try {
            await logoutUser();
            history.replace('/');
        } catch (error) {
            console.error(error);
        }
    };

    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">

                    </IconButton>
                    
                    <Typography variant="h6" className={classes.title}>
                        Bienvenido {email}
                    </Typography>

                    <Typography>
                        Melanoma Detector
                    </Typography>
                    <button onClick={handleLogOut}> Log out</button>
                </Toolbar>
            </AppBar>
            <main className={classes.layout}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={7}>
                        <Paper className={classes.paper}>
                            <Typography component="h6" variant="h6" align="center">
                                Información personal
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                    <   Paper className={classes.paper} >
                            <Typography component="h6" variant="h6" align="center">
                                Datos médicos
                            </Typography>
                            <DatosMedicos/>
                        </Paper>
                        <Paper className={classes.paper} >
                            <Preview  />
                            <div  style={{"display": "flex", "justify-content":"space-around", "margin-top": "10px"}} >
                               <Link href="/segmentacion">
                                   <Button size="small" variant="contained">
                                    Segmentar
                                   </Button>
                               </Link>
                                <Link  href="/clasificacion">
                                   <Button size="small" variant="contained">
                                    Clasificar
                                   </Button>
                               </Link>
                            </div>
                        </ Paper>
                    </Grid>
                </Grid>
                <Copyright equipo="G3 for life"/>
            </main>
        </React.Fragment>
    );
}

export default Checkout;