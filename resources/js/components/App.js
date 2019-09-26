import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import Header from './Header'
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import Vastustore from './Vastustore';
import vastublog from './vastublog';
import Solutions from './Solutions';
import Example from './Carousel';

    class App extends Component {
      render () {
        return (
          <Router>
            <div>
              <Switch>
              <Route exact path="/" component={Home}/>
                <Route exact path='/Header' component={Header} />
                <Route exact path='/Footer' component={Footer} />
                <Route exact path='/About' component={About} />
                <Route exact path='/Contact' component={Contact} />
                <Route exact path='/Services' component={Services} />
                <Route exact path='/Vastustore' component={Vastustore} />
                <Route exact path='/vastublog' component={vastublog} />
                <Route exact path='/Solutions' component={Solutions} />
                <Route exact path='/Carousel' component={Example} />

              </Switch>
            </div>
          </Router>
        )
      }
    }

    ReactDOM.render(<App />, document.getElementById('app'))