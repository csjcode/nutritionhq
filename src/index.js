import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Category from './components/Category';
import Item from './components/Item';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDOM.render(
    <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/:category/:item" component={Item}/>
          <Route path="/:category" component={Category}/>

        </Switch>
    </Router>,
   document.getElementById('root'));
registerServiceWorker();
