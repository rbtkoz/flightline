import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Name from '../Name/Name';
import Fb from '../Facebook/Facebook';
import Line from '../Line/Line';
import '../../styles/normalizer.css';
import resets from '../../styles/resets.css';

import flightline from '../../assets/flighline.png';

const App = () => {
  return (
      <div className={resets['flugchen-app']}>
        <img className={resets['image']} src={flightline}></img>
        <Name />
        <Line />
        <Fb />
      </div>
  );
};

export default App;
