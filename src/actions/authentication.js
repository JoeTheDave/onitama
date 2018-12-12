import authenticationService from 'services/authentication';

export function authenticateWithGoogle() {
  return dispatch => authenticationService.authenticateWithGoogle().then(result => {
    console.log('RESULT', result);
  }).catch(error => {
    throw (error);
  });
}