import React, { useState } from 'react';
import Login from '../components/Login';
import Signup from '../components/SignUp';

const Auth = () => {
    const [isLoggingIn, setIsLoggingIn] = useState(true);

    return (
      <div>
        {isLoggingIn ? (
          <Login setIsLoggingIn={setIsLoggingIn} />
        ) : (
          <Signup setIsLoggingIn={setIsLoggingIn} />
        )}
      </div>
    );
}

export default Auth
