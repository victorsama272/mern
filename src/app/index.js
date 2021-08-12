import React from 'react';
import { render } from 'react-dom';
import { SSL_OP_PKCS1_CHECK_1 } from 'constants';

class App extends React.Component {
    render() {
        return(
            <hi>hola mundo</hi>
        )
    }
}

render(<App/>, document.getElementById('app'));