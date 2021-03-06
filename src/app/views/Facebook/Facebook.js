import React, {Component} from 'react';
import fbCSS from '../Facebook/facebook.css';
import MessengerPlugin from 'react-messenger-plugin';

class Fb extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log('facebook didMount');
  }

  render() {
    return (
      <div className={fbCSS.container}>
        <div className={fbCSS.sub}>Find me on Facebook Messenger.</div>
        <div className ={fbCSS.mybutton}>
          <MessengerPlugin
            type="message-us"
            appId="1803040179951244"
            pageId="1355932354430385"
            size="xlarge"
          />
          </div>
        </div>
    );
  }

}

export default Fb;
