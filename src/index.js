import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import App2 from './components/App2';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDOM.render(
    <Router>
        <Switch>
          <Route exact path="/" component={App}/>
          <Route path="/:category" component={App2}/>
          <Route path="/:category/:item" component={App2}/>
        </Switch>
    </Router>,
   document.getElementById('root'));
registerServiceWorker();
