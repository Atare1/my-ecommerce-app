import React from 'react';
import Logo from './logo.png'
import './index.css'
import AppContext from '../AppContext'
import { Link } from 'react-router-dom'

class Navbar extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar fixed-top shadow-sm bg-white navbar-expand-lg">
                    <div className="container">
                        <div className="row w-100">
                            <div className="col-sm-2">
                                <Link className="" to="/">
                                    <img className="w-100" src={Logo} alt="logo"/>
                                </Link>
                            </div>
                            <div className="col-sm-2"></div>
                            <div className="col-sm-8">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarcontent"
                                aria-expanded="false">
                                    <i className="header-icon fas fa-bars"/>
                                </button>
                                <div className="row float-right collapse navbar-collapse" id="navbarcontent">
                                    <div className="col-xs-4">
                                    
                                <div className="dropdown">
                                     <Link to="/" className="header-text" data-toggle="dropdown" data-offset="20,10" aria-haspopup="true" aria-expanded="false">
                                       <div className="d-inline-flex">
                                           <div className="icon-wrap">
                                               <i className="header-icon fas fa-user"/>
                                           </div>
                                           <div className="text-wrap">
                                           <div>Sign in </div>
                                           <i className="fas fa-caret-down"/>
                                       </div>
                                       </div>
                                       </Link>
                                       <div className="dropdown-menu">
                                           <form className="px-4 py-3">
                                               <div className="form-group">
                                                   <label>Email</label>
                                                   <input type="email" className="form-control" placeholder="email"/>
                                               </div>
                                               <div className="form-group">
                                                   <label>Password</label>
                                                   <input type="password" className="form-control" placeholder="password"/>
                                               </div>
                                               <button type="submit" className="btn btn-primary">Sign in</button>
                                           </form>
                                           <hr/>
                                           <Link className="dropdown-item" to="/">Don't have an account? Sign up</Link>
                                       </div>
                                     </div>
                                     
                                 </div>
                                    <div className="col-xs-4">
                                        <Link to="/cart" className="header-text" >
                                        <div className="d-inline-flex">
                                        <div className="icon-wrap">
                                               <i className="header-icon fas fa-shopping-cart"/>
                                           </div>
                                       <div className="text-wrap">
                                           <span className="small round badge badge-secondary">{this.context.cart.length}</span>
                                           <div>Cart </div>
                                       </div>
                                       </div>
                                        </Link>
                                    </div>
                                    <div className="col-xs-4">
                                        <Link to="wishlist" className="header-text">
                                        <div className="d-inline-flex">
                                        <div className="icon-wrap">
                                               <i className="header-icon fas fa-heart"/>
                                           </div>
                                           <div className="text-wrap">
                                           <span className="small round badge badge-secondary">1</span>
                                           <div>Wishlist </div>
                                       </div>
                                       </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
              
             </div>
        )
    }
}
Navbar.contextType = AppContext
export default Navbar;