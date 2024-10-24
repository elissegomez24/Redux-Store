// Action creators for user authentication

export const loginRequest = () => ({
    type: 'LOGIN_REQUEST',
  });
  
  export const loginSuccess = (user) => ({
    type: 'LOGIN_SUCCESS',
    payload: user,
  });
  
  export const loginFailure = (error) => ({
    type: 'LOGIN_FAILURE',
    payload: error,
  });
  
  export const logout = () => ({
    type: 'LOGOUT',
  });
  
  // Async action to handle user login (example with mock async API)
  export const loginUser = (credentials) => async (dispatch) => {
    dispatch(loginRequest());
    try {
      // Mock API call (replace with actual API)
      const user = await mockLoginApi(credentials);
      dispatch(loginSuccess(user));
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
  
  // Mock API (replace this with actual API call)
  const mockLoginApi = (credentials) =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (credentials.username === 'user' && credentials.password === 'pass') {
          resolve({ id: 1, username: 'user' });
        } else {
          reject(new Error('Invalid credentials'));
        }
      }, 1000);
    });
  