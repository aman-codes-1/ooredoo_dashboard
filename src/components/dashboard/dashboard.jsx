import React from 'react';
import './dashboard.css';
import TotalGen from '../../media/generater.jpg'
import OnGen from '../../media/ongen.jpg'
import OffGen from '../../media/offgen.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faCog, faWaveSquare, faCommentAlt, faShieldAlt, faTint, faCaretDown, faLongArrowAltDown, faGasPump, faThermometerQuarter, faOilCan, faBell } from '@fortawesome/free-solid-svg-icons';
import {faBell as faBellRegular} from '@fortawesome/free-regular-svg-icons';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class dashboard extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
          locations: []
        };
        this.handleMapClick = this.handleMapClick.bind(this);
    }
    
    handleMapClick = (ref, map, ev) => {
        const location = ev.latLng;
        this.setState(prevState => ({
            locations: [...prevState.locations, location]
        }));
        map.panTo(location);
    };

    render() {
        return (
            <div className="wrapper">
                <div className="main">
                    <main class="content">
                        <div class="container-fluid p-0">
                            
                            <div style={{background: "#edeef3", paddingTop: "17px"}}>
                                <div class="card-group">
                                    <div class="col">
                                        <div class="card" style={{padding: "23px"}}>
                                            <div class="card-deck">
                                                <div class="card cg">
                                                    <div class="card-body">
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen">
                                                            <img src={TotalGen} class="avatar img-fluid rounded-circle mr-1" alt="Admin" height="50" width="50"/>
                                                            <span style={{paddingLeft: "10px"}}>
                                                                TOTAL GENERATER
                                                                <br></br>
                                                                200
                                                            </span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="card cg">
                                                    <div class="card-body">
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen">
                                                            <img src={OnGen} class="avatar img-fluid rounded-circle mr-1" alt="Admin" height="50" width="50"/>
                                                            <span style={{paddingLeft: "10px"}}>
                                                                ON GENERATER
                                                                <br></br>
                                                                180
                                                            </span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="card cg">
                                                    <div class="card-body">
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen">
                                                            <img src={OffGen} class="avatar img-fluid rounded-circle mr-1" alt="Admin" height="50" width="50"/>
                                                            <span style={{paddingLeft: "10px"}}>
                                                                OFF GENERATER
                                                                <br></br>
                                                                20
                                                            </span>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="card" style={{marginTop: "23px", height: "872px"}}>
                                                <Map
                                                    google={this.props.google}
                                                    className={"map"}
                                                    zoom={this.props.zoom}
                                                    initialCenter={this.props.center}
                                                    onClick={this.handleMapClick}
                                                    >
                                                    {this.state.locations.map((location, i) => {
                                                        return (
                                                            <Marker
                                                                key={i}
                                                                position={{ lat: location.lat(), lng: location.lng() }}
                                                            />
                                                        );
                                                    })}
                                                </Map>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="card-group">
                                        <div class="col">
                                            <div class="card ce">
                                                <div class="card-deck">
                                                    <div class="col-md-7.5">
                                                        <div class="card border-0">
                                                            <h6 class="d-flex align-items-center mb-0">
                                                                <span class="ch"><span style={{paddingLeft: "20px"}}><FontAwesomeIcon icon={ faSearch } size="lg"/></span><span><input type="text" placeholder="Search by Generater Id"/></span></span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-4.5">
                                                        <div class="card border-0">
                                                            <h6 class="d-flex align-items-center mb-0">
                                                                <span class="ci cg"><span>All Devices</span><span style={{paddingLeft: "10px"}}><FontAwesomeIcon icon={ faCaretDown } size="lg"/></span></span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card">
                                                <div class="card-deck cf">
                                                    <div class="card border-0">
                                                        <h6 class="d-flex align-items-center mb-0 font-weight-regular gen2">
                                                            <span class="mr-2"><FontAwesomeIcon icon={ faCog } size="lg"/></span><span>Generater id</span>
                                                        </h6>
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen3">
                                                            <span style={{paddingLeft: "30px"}}>NHT87898</span>
                                                        </h5>
                                                    </div>
                                                    <div class="card border-0">
                                                        <h6 class="d-flex align-items-center mb-0 font-weight-regular gen2">
                                                            <span class="mr-2"><FontAwesomeIcon icon={ faShieldAlt } size="lg"/></span><span>Status</span>
                                                        </h6>
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen3">
                                                            <span style={{paddingLeft: "30px"}}>On</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="card-deck cf">
                                                    <div class="card border-0">
                                                        <h6 class="d-flex align-items-center mb-0 font-weight-regular gen2">
                                                            <span class="mr-2"><FontAwesomeIcon icon={ faCog } size="lg"/></span><span>Active Alarm</span>
                                                        </h6>
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen3 ye">
                                                            <span style={{paddingLeft: "30px"}}>Yes</span>
                                                        </h5>
                                                    </div>
                                                    <div class="card border-0">
                                                        <h6 class="d-flex align-items-center mb-0 font-weight-regular gen2">
                                                            <span class="mr-2"><FontAwesomeIcon icon={ faWaveSquare } size="lg"/></span><span>Running</span>
                                                        </h6>
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen3">
                                                            <span style={{paddingLeft: "36px"}}>Yes</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="card-deck cf">
                                                    <div class="row" style={{paddingLeft: "15px"}}>
                                                        <div class="card border-0">
                                                            <h6 class="d-flex align-items-center mb-0 font-weight-regular gen2">
                                                                <span class="mr-2"><FontAwesomeIcon icon={ faCommentAlt } size="lg"/></span><span>Last message read</span>
                                                            </h6>
                                                            <h5 class="d-flex align-items-center mb-0 font-weight-bold gen3">
                                                                <span style={{paddingLeft: "30px"}}>20th sep 10:05 AM</span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-deck cf">
                                                    <div class="card border-0">
                                                        <h6 class="d-flex align-items-center mb-0 font-weight-regular gen2">
                                                            <span class="mr-2"><FontAwesomeIcon icon={ faTint } size="lg"/></span><span>Fuel Volume</span>
                                                        </h6>
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen3">
                                                            <span style={{paddingLeft: "24px"}}>30%</span>
                                                        </h5>
                                                    </div>
                                                    <div class="card cg align-items-center d-flex justify-content-center" style={{background: "#ee4037", color: "#f2f2f2"}}>
                                                        <h5 class="d-flex mb-0 font-weight-bold gen">
                                                            View
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="card">
                                                <div class="card-deck cf">
                                                    <div class="card border-0">
                                                        <h6 class="d-flex align-items-center mb-0 font-weight-regular gen2">
                                                            <span class="mr-2"><FontAwesomeIcon icon={ faCog } size="lg"/></span><span>Generater id</span>
                                                        </h6>
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen3">
                                                            <span style={{paddingLeft: "30px"}}>NHT87898</span>
                                                        </h5>
                                                    </div>
                                                    <div class="card border-0">
                                                        <h6 class="d-flex align-items-center mb-0 font-weight-regular gen2">
                                                            <span class="mr-2"><FontAwesomeIcon icon={ faShieldAlt } size="lg"/></span><span>Status</span>
                                                        </h6>
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen3">
                                                            <span style={{paddingLeft: "30px"}}>Off</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="card-deck cf">
                                                    <div class="card border-0">
                                                        <h6 class="d-flex align-items-center mb-0 font-weight-regular gen2">
                                                            <span class="mr-2"><FontAwesomeIcon icon={ faCog } size="lg"/></span><span>Active Alarm</span>
                                                        </h6>
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen3 ye">
                                                            <span style={{paddingLeft: "30px"}}>Yes</span>
                                                        </h5>
                                                    </div>
                                                    <div class="card border-0">
                                                        <h6 class="d-flex align-items-center mb-0 font-weight-regular gen2">
                                                            <span class="mr-2"><FontAwesomeIcon icon={ faWaveSquare } size="lg"/></span><span>Running</span>
                                                        </h6>
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen3">
                                                            <span style={{paddingLeft: "36px"}}>Yes</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="card-deck cf">
                                                    <div class="row" style={{paddingLeft: "15px"}}>
                                                        <div class="card border-0">
                                                            <h6 class="d-flex align-items-center mb-0 font-weight-regular gen2">
                                                                <span class="mr-2"><FontAwesomeIcon icon={ faCommentAlt } size="lg"/></span><span>Last message read</span>
                                                            </h6>
                                                            <h5 class="d-flex align-items-center mb-0 font-weight-bold gen3">
                                                                <span style={{paddingLeft: "30px"}}>20th sep 10:05 AM</span>
                                                            </h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="card-deck cf">
                                                    <div class="card border-0">
                                                        <h6 class="d-flex align-items-center mb-0 font-weight-regular gen2">
                                                            <span class="mr-2"><FontAwesomeIcon icon={ faTint } size="lg"/></span><span>Fuel Volume</span>
                                                        </h6>
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen3">
                                                            <span style={{paddingLeft: "24px"}}>30%</span>
                                                        </h5>
                                                    </div>
                                                    <div class="card cg align-items-center d-flex justify-content-center" style={{background: "#ee4037", color: "#f2f2f2"}}>
                                                        <h5 class="d-flex mb-0 font-weight-bold gen">
                                                            View
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="card">
                                                <div class="card-deck cf">
                                                    <div class="card border-0">
                                                        <h6 class="d-flex align-items-center mb-0 font-weight-regular gen2">
                                                            <span class="mr-2"><FontAwesomeIcon icon={ faCog } size="lg"/></span><span>Generater id</span>
                                                        </h6>
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen3">
                                                            <span style={{paddingLeft: "30px"}}>NHT87898</span>
                                                        </h5>
                                                    </div>
                                                    <div class="card border-0">
                                                        <h6 class="d-flex align-items-center mb-0 font-weight-regular gen2">
                                                            <span class="mr-2"><FontAwesomeIcon icon={ faShieldAlt } size="lg"/></span><span>Status</span>
                                                        </h6>
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen3">
                                                            <span style={{paddingLeft: "30px"}}>On</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                                <div class="card-deck cf">
                                                    <div class="card border-0">
                                                        <h6 class="d-flex align-items-center mb-0 font-weight-regular gen2">
                                                            <span class="mr-2"><FontAwesomeIcon icon={ faCog } size="lg"/></span><span>Active Alarm</span>
                                                        </h6>
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen3 ye">
                                                            <span style={{paddingLeft: "30px"}}>Yes</span>
                                                        </h5>
                                                    </div>
                                                    <div class="card border-0">
                                                        <h6 class="d-flex align-items-center mb-0 font-weight-regular gen2">
                                                            <span class="mr-2"><FontAwesomeIcon icon={ faWaveSquare } size="lg"/></span><span>Running</span>
                                                        </h6>
                                                        <h5 class="d-flex align-items-center mb-0 font-weight-bold gen3">
                                                            <span style={{paddingLeft: "36px"}}>Yes</span>
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card-group d-flex" style={{paddingTop: "30px", paddingBottom: "30px"}}>
                                    <div class="col">
							            <div class="card flex-fill">
                                            <div class="card-header gen3" style={{background: "white"}}>
                                                <div class="card-deck">
                                                    <div class="col align-items-center d-flex">
                                                        <h5 class="d-flex mb-0 font-weight-bold">
                                                            Recent alarms
                                                        </h5>
                                                    </div>
                                                    <div class="col-md-auto align-items-center d-flex">
                                                        <div class="card border-0">
                                                            <h6 class="d-flex mb-0" style={{paddingRight: "25px"}}>
                                                                <span class="ch2"><span style={{paddingLeft: "20px"}}><FontAwesomeIcon icon={ faSearch } size="lg"/></span><span><input type="text" placeholder="Search by alarm Id"/></span></span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                    <div class="col-md-auto align-items-center d-flex">
                                                        <div class="card border-0">
                                                            <h6 class="d-flex mb-0">
                                                                <span class="cj cg"><span style={{paddingRight: "10px"}}><FontAwesomeIcon icon={ faLongArrowAltDown } size="lg"/></span><span class="dn">Download</span></span>
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <table id="datatables-dashboard-traffic" class="table table-striped my-0 gen3">
                                                <thead>
                                                    <tr style={{background: "#f4f2f2"}} class="nm">
                                                        <th>ALARM ID</th>
                                                        <th class="text-left">DATE AND TIME</th>
                                                        <th class="d-none d-xl-table-cell text-left">GENERATOR ID</th>
                                                        <th class="d-none d-xl-table-cell text-left">PARAMETER</th>
                                                        <th class="d-none d-xl-table-cell text-left">VALUE</th>
                                                        <th class="d-none d-xl-table-cell text-center">ALARM TYPE</th>
                                                        <th class="d-none d-xl-table-cell text-center">MANUAL CLOSE</th>
                                                    </tr>
                                                </thead>
                                                <thead>
                                                    <tr class="nn">
                                                        <td>AI -1</td>
                                                        <td class="text-left">20 June 2020 10:00 AM</td>
                                                        <td class="d-none d-xl-table-cell text-left">G-1</td>
                                                        <td class="d-none d-xl-table-cell text-left">
                                                            <span class="circle-icon"><FontAwesomeIcon icon={faGasPump}/></span><span style={{paddingLeft: "10px"}}>Fuel Level</span>
                                                        </td>
                                                        <td class="d-none d-xl-table-cell text-left">125%</td>
                                                        <td class="d-none d-xl-table-cell text-center"><span class="crt">Critical</span></td>
                                                        <td class="d-none d-xl-table-cell text-center"><input type="radio" name="Active" checked="checked" style={{marginRight: "10px"}}/><span class="rd">Active</span></td>
                                                    </tr>
                                                    <tr class="nn">
                                                        <td>AI -1</td>
                                                        <td class="text-left">20 June 2020 10:00 AM</td>
                                                        <td class="d-none d-xl-table-cell text-left">G-2</td>
                                                        <td class="d-none d-xl-table-cell text-left">
                                                            <span class="circle-icon"><FontAwesomeIcon icon={faOilCan}/></span><span style={{paddingLeft: "10px"}}>Engine Speed</span>
                                                        </td>
                                                        <td class="d-none d-xl-table-cell text-left">5000 RPM</td>
                                                        <td class="d-none d-xl-table-cell text-center"><span class="mjr">Major</span></td>
                                                        <td class="d-none d-xl-table-cell text-center">
                                                            <span><FontAwesomeIcon icon={faBellRegular}/></span><span style={{paddingLeft: "10px"}}>Cleared</span>
                                                        </td>
                                                    </tr>
                                                    <tr class="nn">
                                                        <td>AI -1</td>
                                                        <td class="text-left">20 June 2020 10:00 AM</td>
                                                        <td class="d-none d-xl-table-cell text-left">G-3</td>
                                                        <td class="d-none d-xl-table-cell text-left">
                                                            <span class="circle-icon"><FontAwesomeIcon icon={faThermometerQuarter}/></span><span style={{paddingLeft: "10px"}}>Oil Pressure</span>
                                                        </td>
                                                        <td class="d-none d-xl-table-cell text-left">500 Kpa</td>
                                                        <td class="d-none d-xl-table-cell text-center"><span class="mnr">Minor</span></td>
                                                        <td class="d-none d-xl-table-cell text-center"><input type="radio" name="Active" checked="checked" style={{marginRight: "10px"}}/><span class="rd">Active</span></td>
                                                    </tr><tr class="nn">
                                                        <td>AI -1</td>
                                                        <td class="text-left">20 June 2020 10:00 AM</td>
                                                        <td class="d-none d-xl-table-cell text-left">G-1</td>
                                                        <td class="d-none d-xl-table-cell text-left">
                                                            <span class="circle-icon"><FontAwesomeIcon icon={faGasPump}/></span><span style={{paddingLeft: "10px"}}>Fuel Level</span>
                                                        </td>
                                                        <td class="d-none d-xl-table-cell text-left">125%</td>
                                                        <td class="d-none d-xl-table-cell text-center"><span class="crt">Critical</span></td>
                                                        <td class="d-none d-xl-table-cell text-center"><input type="radio" name="Active" checked="checked" style={{marginRight: "10px"}}/><span class="rd">Active</span></td>
                                                    </tr><tr class="nn">
                                                        <td>AI -1</td>
                                                        <td class="text-left">20 June 2020 10:00 AM</td>
                                                        <td class="d-none d-xl-table-cell text-left">G-2</td>
                                                        <td class="d-none d-xl-table-cell text-left">
                                                            <span class="circle-icon"><FontAwesomeIcon icon={faOilCan}/></span><span style={{paddingLeft: "10px"}}>Engine Speed</span>
                                                        </td>
                                                        <td class="d-none d-xl-table-cell text-left">5000 RPM</td>
                                                        <td class="d-none d-xl-table-cell text-center"><span class="mjr">Major</span></td>
                                                        <td class="d-none d-xl-table-cell text-center">
                                                            <span><FontAwesomeIcon icon={faBellRegular}/></span><span style={{paddingLeft: "10px"}}>Cleared</span>
                                                        </td>                                                    </tr>
                                                    <tr class="nn">
                                                        <td>AI -1</td>
                                                        <td class="text-left">20 June 2020 10:00 AM</td>
                                                        <td class="d-none d-xl-table-cell text-left">G-3</td>
                                                        <td class="d-none d-xl-table-cell text-left">
                                                            <span class="circle-icon"><FontAwesomeIcon icon={faThermometerQuarter}/></span><span style={{paddingLeft: "10px"}}>Oil Pressure</span>
                                                        </td>
                                                        <td class="d-none d-xl-table-cell text-left">500 Kpa</td>
                                                        <td class="d-none d-xl-table-cell text-center"><span class="mnr">Minor</span></td>
                                                        <td class="d-none d-xl-table-cell text-center"><input type="radio" class="rd-btn" name="Active" checked="checked" style={{marginRight: "10px"}}/><span class="rd">Active</span></td>
                                                    </tr>
                                                </thead>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                
                            <footer class="footer" style={{paddingTop: "5px"}}>
                                <div class="container-fluid">
                                    <div class="row text-muted">
                                        <div class="col-6 text-left">
                                            <ul class="list-inline">
                                                <li class="list-inline-item">
                                                    <a class="text-muted" href="#">Support</a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a class="text-muted" href="#">Help Center</a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a class="text-muted" href="#">Privacy</a>
                                                </li>
                                                <li class="list-inline-item">
                                                    <a class="text-muted" href="#">Terms of Service</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-6 text-right">
                                            <p class="mb-0">
                                                &copy; {(new Date().getFullYear())} - <a href="/" class="text-muted">Ooredoo</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </footer>

                        </div>
                    </main>
                </div>
            </div>        
        );
    }
}

//text-success text-danger
export default GoogleApiWrapper({
    apiKey: 'AIzaSyAcKB79LKLkA-xGPdJ7lNKGs_IpU0GDgm8'
})(dashboard);