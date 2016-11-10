import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Name from '../Name/Name';
import Fb from '../Facebook/Facebook';
import Line from '../Line/Line';
import '../../styles/normalizer.css';
import resets from '../../styles/resets.css';

const App = () => {
  return (
      <div className={resets['flugchen-app']}>
        <Name />
        <Line />
        <Fb />
      </div>
  );
};

export default App;
