import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Form,
  FormGroup,
  FormControl,
} from 'react-bootstrap';
import { loginUser } from '../service/magic';

import './styles/Signup.css';

const Authenticate = () => {
  
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState('');
  const [error, setError] = useState(null);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!email) {
      setLoading(false);
      setError('Email is Invalid');
      return;
    }

    try {
      await loginUser(email);
      setLoading(false);
      setTimeout(() => {  history.replace('/checkout'); }, 2000);
    } catch (error) {
      setError('Unable to log in');
      console.error(error);
    }
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div className="body">
      <h2 className="my-5" >Bienvenido a Melanoma Detector</h2>
      <div className="container p-0" id="container">
        <div className="formcontainer sign-in-container">
          <div className="form text-center">
          <h1>Iniciar sesión</h1>

            <Form onSubmit={handleSubmit} className="p-2 my-5 mx-5">

            <FormGroup className="mt-3" >
              <FormControl 
               autoComplete="off"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={handleChange}
                placeholder="Correo electrónico"
              />
              <p className="text-danger text-small">{error}</p>
            </FormGroup>
            <Button
              type="submit"
              size="md"
              className="d-block w-100"
              variant="primary"
            >
              {loading ? 'Loading...' : 'Ingresar'}
            </Button>
      </Form>
          </div>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-right">
              <h1>Hola!</h1>
              <p>Ingresa para averiguar si posiblemente tienes melanoma</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Authenticate;