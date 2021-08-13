import React from 'react';
import { render } from 'react-dom';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';
import App from './App';


render(<App/>, document.getElementById('app'));