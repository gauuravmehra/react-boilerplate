/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { renderRoutes } from 'react-router-config';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import createRoutes from '../../routes';

import GlobalStyle from '../../global-styles';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.routes = [];
    this.actionsArr = [];
    if (this.props.redirectRoutes) {
      [].push.apply(this.routes, this.props.redirectRoutes);
    }
    [].push.apply(this.routes, createRoutes(props.store));
  }

  render() {
    return (
      <React.Fragment>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
        >
          <meta
            name="description"
            content="A React.js Boilerplate application"
          />
        </Helmet>

        <main role="main" style={{ minHeight: '400px' }}>
          <Header />
          {renderRoutes(this.routes)}
          <Footer />
          <GlobalStyle />
        </main>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  redirectRoutes: PropTypes.any,
  store: PropTypes.object.isRequired,
};
