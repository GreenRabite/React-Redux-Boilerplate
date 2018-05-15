import React, { Component } from 'react';
import MainBoard from './components/main_board';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <MainBoard />
      </Provider>
    );
  }
}

export default App;
