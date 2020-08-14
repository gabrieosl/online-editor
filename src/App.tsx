import React from 'react';

import GlobalStyles from './styles/global';
import Routes from './routes';
import Context from './context';

const App: React.FC = () => {
  return (
    <Context>
      <Routes />
      <GlobalStyles />
    </Context>
  );
};

export default App;
