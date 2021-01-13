import React from 'react';
import { configure } from 'mobx';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { Settings } from 'luxon';

import App from './App';
import { theme } from './styles/MuiTheme';
import './index.scss';

Settings.defaultLocale = 'ru';
configure({ enforceActions: 'observed' });

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root'),
);

if (module.hot) {
    module.hot.accept();
}
