import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import MapContainer from './MapContainer';
import PageNotFound from './PageNotFound';
import withRoot from '../../../withRoot';
import '../../res/styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <MapContainer google={this.props.google} />}
          />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default withRoot(App);
