import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDOM.render(<Router>
        <Switch>
          <Route path="/:id" component={App}/>
        </Switch>
    </Router>,
   document.getElementById('root'));
registerServiceWorker();
