import React, {Component} from 'react';
import {Provider} from 'react-redux';
import Store from './redux/store';
import App from './components/AppContainer';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={Store.store}>
        <App />
      </Provider>
    );
  }
}
