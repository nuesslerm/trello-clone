import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signin" render={() => <SignInAndSignUpPage />} />
      </Switch>
    </div>
  );
};

export default App;
