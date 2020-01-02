import React from 'react'
import {Link} from 'react-router-dom'

class Sidebar extends React.Component{
    render(){
        return(
            <div>
                <div className="card p-5">
                    <h5>MY CATEGORIES</h5>
                    <ul className="list-unstyled p-0 m-0">
                        <li>
                            <Link to="/fashions" >
                               <div className="d-inline-flex">
                                   <div className="icon-wrap">
                                       <i className="header-icon fas fa-tshirt"></i>
                                   </div>
                                   <div className="text-wrap ">
                                       Fashion
                                   </div>
                               </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/households" >
                               <div className="d-inline-flex">
                                   <div className="header-icon icon-wrap">
                                       <i className="fas fa-home"></i>
                                   </div>
                                   <div className="text-wrap">
                                       Household Appliances
                                   </div>
                               </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/phones" >
                               <div className="d-inline-flex">
                                   <div className="header-icon icon-wrap">
                                       <i className="fas fa-mobile-alt"></i>
                                   </div>
                                   <div className="text-wrap">
                                       Phones & Tablets
                                   </div>
                               </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/computers" >
                               <div className="d-inline-flex">
                                   <div className="header-icon icon-wrap">
                                       <i className="fas fa-laptop"></i>
                                   </div>
                                   <div className="text-wrap">
                                       Computers & Accessories
                                   </div>
                               </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/electronics" >
                               <div className="d-inline-flex">
                                   <div className="header-icon icon-wrap">
                                       <i className="fas fa-tv"></i>
                                   </div>
                                   <div className="text-wrap">
                                       Consumer Electronics
                                   </div>
                               </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Sidebar