import React from 'react';
//import { fetchData } from './api';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Header, dashboard, Monitoring, Analytics, Reports, Alarms} from './components';

export default function Navigation(){
    return(
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/dashboard" component={dashboard} />
                    <Route path="/Monitoring" component={Monitoring} />
                    <Route path="/Analytics" component={Analytics} />
                    <Route path="/Reports" component={Reports} />
                    <Route path="/Alarms" component={Alarms} />
                </Switch>
            </div>
        </Router>
    );
}