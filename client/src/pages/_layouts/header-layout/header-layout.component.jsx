import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/header/header.component';

const HeaderLayout = ({ children }) => (
  <div>
    <Header />
    <div className="header-layout">{children}</div>
  </div>
);

/**
 * You can use prop-types to document the intended types of properties passed to components.
 * React will check props passed to your components against those definitions,
 * and warn in development if they don’t match.
 * https://www.npmjs.com/package/prop-types
 */
HeaderLayout.propTypes = {
  // Runtime type checking for React props and similar objects.
  // children defined to be node(s)
  children: PropTypes.node.isRequired,
};

export default HeaderLayout;
