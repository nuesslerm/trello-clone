import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import './sign-up.styles.scss';

const SignUp = (props) => {
  const [state, setState] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { displayName, email, password, confirmPassword } = state;

    if (password !== confirmPassword) {
      props.showError("Passwords don't match");
      return;
    }

    try {
      // await sendDetailsToServer();
      // look at https://github.com/codeclassifiers/loginforms/blob/master/src/components/RegistrationForm/RegistrationForm.js
      // https://medium.com/technoetics/create-basic-login-forms-using-react-js-hooks-and-bootstrap-2ae36c15e551

      // redux-forms: https://medium.com/@samsonssali/redux-forms-5249a8d51313

      setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const { displayName, email, password, confirmPassword } = state;

  return (
    <div clasName="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sing up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          id="displayName"
          type="text"
          value={displayName}
          handleChange={handleChange}
          label="Username"
          required
        />
        <FormInput
          id="email"
          type="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          id="password"
          type="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          id="confirmPassword"
          type="password"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
};

export default SignUp;
