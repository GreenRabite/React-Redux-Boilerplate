import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MainBoard from './components/main_board';


class App extends Component {

  render() {
    const {store} = this.props;
    return (
      <div>
        <Provider store={store}>
          <MainBoard />
        </Provider>
      </div>
    );
  }
}

export default App;
