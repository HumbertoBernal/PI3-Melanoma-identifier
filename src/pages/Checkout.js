import React, {useContext, useEffect, useState} from 'react';
import { UserContext } from '../context/userContext';
import { useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import AddressForm from "../components/AddressForm";
import DatosMedicos from "../components/DatosMedicos";
import Preview from "../components/Preview";
import Copyright from "../components/Copyright";
import {getToken} from "../service/magic";
import axios from 'axios';


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
    const {email} = useContext(UserContext);
    const [files, setFiles] = useState([]);
    const [segmentBool, setSegment] = useState(false);
    const [doSubmit, setSubmit] = useState(false);
    const [submitState, setSubmitState] = useState(0);
    const classes = useStyles();
    const history = useHistory();

    const submitted = () => {
        setSubmitState(submitState + 1)
    }

    useEffect(() => {
        async function submitPhoto() {
            if(doSubmit) {
                let formData = new FormData();
                formData.append('img_file', files[0]);
                formData.append('type', segmentBool)
                formData.append('email', email);
                const token = await getToken()
                const response = await axios({
                    method: 'post',
                    url: `http://localhost:5000/upload`,
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': token}
                });
                console.log("upload response", response)
                submitted()
            }
        }
        submitPhoto()
    }, [doSubmit, email, files, segmentBool, submitted])

    useEffect(() => {
        const printToken = async () => {
            const token = await getToken();
            console.log("token", token)
        }
        printToken();
    }, []);

    useEffect( () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    useEffect(() => {
        if(submitState === 3) {
            if(segmentBool) {
                history.replace("/segmentacion")
            }
            else {
                history.replace("/classificacion")
            }
        }
    }, [submitState])

    const segment = async () => {
        setSegment(true);
        await setSubmit(true);
        // setTimeout(() => history.replace("/segmentacion"), 5000)
    };

    const classify = async () => {
        setSegment(false)
        await setSubmit(true);
        // setTimeout(() => history.replace("/clasificacion"), 5000)
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={7}>
                        <Paper className={classes.paper}>
                            <Typography component="h6" variant="h6" align="center">
                                Información personal
                            </Typography>
                            <AddressForm email={email} submitForm={doSubmit} type={segmentBool} submited={submitted}/>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={5}>
                    <Paper className={classes.paper} >
                            <Typography component="h6" variant="h6" align="center">
                                Datos médicos
                            </Typography>
                            <DatosMedicos email={email} submitForm={doSubmit} type={segmentBool} submitted={submitted}/>
                        </Paper>
                        <Paper className={classes.paper} >
                            <Preview  files={files} setFiles={setFiles}/>
                            <div  style={{"display": "flex", "justifyContent":"space-around", "marginTop": "10px"}} >
                                   <Button size="small" variant="contained" onClick={segment}>
                                       Segmentar
                                   </Button>
                                   <Button size="small" variant="contained" onClick={classify}>
                                        Clasificar
                                   </Button>
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