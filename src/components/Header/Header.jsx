import React from 'react';
//import { Card, CardContent, Typography, Grid } from '@material-ui/core';
//import CountUp from 'react-countup';
//import cx from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faDesktop, faChartArea, faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faBell as faBellRegular } from '@fortawesome/free-regular-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import './Header.css';
import Logo from '../../media/logo.png';
import Admin from '../../media/avatar.jpg'
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (   
            <nav className="container" class="navbar navbar-expand-md navbar-fixed-top" role="navigation">
                <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse sp" id="navbarMenu">
                    <NavLink to="/dashboard" class="navbar-brand nav-link">
                        <img style={{marginRight: "40px"}} className="img_responsive brand" src={Logo} alt="Orreddo"></img>
                    </NavLink>
                    <NavLink exact style={{marginRight: "12px"}} to="/dashboard" activeClassName="active" className="nav-link btn"><FontAwesomeIcon icon={ faHome } />&nbsp;&nbsp;Dashboard</NavLink>
                    <NavLink exact style={{marginRight: "12px"}} to="/Monitoring" activeClassName="active" className="nav-link btn"><FontAwesomeIcon icon={ faDesktop } />&nbsp;&nbsp;Monitoring</NavLink>
                    <NavLink exact style={{marginRight: "12px"}} to="/Analytics" activeClassName="active" className="nav-link btn"><FontAwesomeIcon icon={ faChartArea } />&nbsp;&nbsp;Analytics</NavLink>
                    <NavLink exact style={{marginRight: "12px"}} to="/Reports" activeClassName="active" className="nav-link btn"><FontAwesomeIcon icon={ faChartPie } />&nbsp;&nbsp;Reports</NavLink>
                    <NavLink exact style={{marginRight: "12px"}} to="/Alarms" activeClassName="active" className="nav-link btn"><FontAwesomeIcon icon={ faBellRegular } />&nbsp;&nbsp;Alarms</NavLink>
                </div>

                <div class="nav-item dropdown">
					<a class="nav-link navbar-nav nav-icon dropdown-toggle d-inline-block ad-btn" href="#" data-toggle="dropdown">
                        <img src={Admin} class="avatar img-fluid rounded-circle mr-2" alt="Admin" height="40" width="40"/> <span>Admin</span>
                        <i class="align-middle" data-feather="settings"></i>
                    </a>
					<div class="dropdown-menu dropdown-menu-right">
                        <a class="dropdown-item" href="pages-profile.html"><i class="align-middle mr-1" data-feather="user"></i> Profile</a>
                        <a class="dropdown-item" href="#"><i class="align-middle mr-1" data-feather="pie-chart"></i> Analytics</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="pages-settings.html">Settings & Privacy</a>
                        <a class="dropdown-item" href="#">Help</a>
                        <a class="dropdown-item" href="#">Sign out</a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;