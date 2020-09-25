import React from 'react';
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './components/home';
import Portfolio from './components/Portfolio';
import Competences from './components/Competences';
import CentresInterets from './components/CentresInterets';
import HeaderNav from './components/HeaderNav';
import Footer from './components/Footer';


class App extends React.Component {
    render() {
        return (
            <Router>
         <div>   
            <HeaderNav />
                <Switch>
                    <Route exact path="/" component={Home} />                    
                    <Route path="/competences" component={Competences} />
                    <Route path="/centres-d'-interet" component={CentresInterets} />
                    <Route path="/portfolio" component={Portfolio} />
                </Switch>
                <Footer />
             </div>
             

            </Router>
        );
    }
}

export default App;
