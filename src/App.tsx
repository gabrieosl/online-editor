import React from 'react';
import { Provider } from 'react-redux';

import GlobalStyles from './styles/global';
import Routes from './routes';
import Context from './context';
import store from './redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Context>
        <Routes />
        <GlobalStyles />
      </Context>
    </Provider>
  );
};

export default App;
