import React from 'react';

import HeaderLayout from '../_layouts/header-layout/header-layout.component';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.scss';

const SignInAndSignUpPage = () => (
  <HeaderLayout>
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  </HeaderLayout>
);

export default SignInAndSignUpPage;
