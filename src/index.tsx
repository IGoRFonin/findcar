import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './components/App/app';
import store from './store';
import {
    BrowserRouter as Router
} from 'react-router-dom'
import './style.css';


ReactDOM.render(
    <AppContainer>
        <Router>
            <Provider store={store}>
                <App />
            </Provider>
        </Router>
    </AppContainer>,
    document.getElementById('root') as HTMLElement
);

interface RequireImport {
    default: any;
}

if (module.hot) {
    module.hot.accept('./components/App/app', () => {
        console.log('doing a app hot accept');
        const NextApp = require<RequireImport>('./components/App/app').default;
        ReactDOM.render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
