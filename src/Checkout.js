import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import DatosMedicos from "./DatosMedicos";
import Preview from "./Preview"
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import { useHistory } from 'react-router-dom';
import { UserContext } from './context/userContext';
import { logoutUser } from './service/magic';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="">
                G3
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

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

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
    switch (step) {
        case 0:
            return <AddressForm />;
        case 1:
            return <PaymentForm />;
        case 2:
            return <Review />;
        default:
            throw new Error('Unknown step');
    }
}

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
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                    News
                    </Typography>
                 
                </Toolbar>
                </AppBar>
            <AppBar position="absolute" color="default" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Melanoma Detector
                    </Typography>
                    <Typography variant="h6" color="inherit" >
                        {email}
                    </Typography>
                </Toolbar>
            </AppBar>
            <main className={classes.layout}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={7}>
                        <Paper className={classes.paper}>
                            <Typography component="h6" variant="h6" align="center">
                                Información personal
                            </Typography>
                            <React.Fragment>
                                {activeStep === steps.length ? (
                                    <React.Fragment>
                                        <Typography variant="h5" gutterBottom>
                                            Thank you for your order.
                                        </Typography>
                                        <Typography variant="subtitle1">
                                            Your order number is #2001539. We have emailed your order confirmation, and will
                                            send you an update when your order has shipped.
                                        </Typography>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        {getStepContent(activeStep)}
                                    </React.Fragment>
                                )}
                            </React.Fragment>
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
                <Copyright />
            </main>
        </React.Fragment>
    );
}

export default Checkout;