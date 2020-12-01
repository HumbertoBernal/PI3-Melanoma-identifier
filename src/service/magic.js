import { Magic } from 'magic-sdk';
import axios from 'axios'

const magic = new Magic('pk_test_4B45E13C2D675C38');

export const checkUser = async (cb) => {
  const isLoggedIn = await magic.user.isLoggedIn();
  if (isLoggedIn) {
    const user = await magic.user.getMetadata();
    const token = getToken();
    const response = await axios({
      method: 'get',
      headers: {'Authorization': token},
      data: {'email': user.email},
      url: 'http://localhost:5000/v1/users/login'
    })
    return cb({ isLoggedIn: true, email: user.email, hasData: response.data && response.data.hasData });
  }
  return cb({ isLoggedIn: false, hasData: false });
};

export const loginUser = async (email) => {
  await magic.auth.loginWithMagicLink({ email });
};

export const logoutUser = async () => {
  await magic.user.logout();
};

export const getToken = async () => {
  const didToken = await magic.user.getIdToken();
  return didToken;
}