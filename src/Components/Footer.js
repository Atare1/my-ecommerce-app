import React from 'react';
import {Link} from 'react-router-dom'


class Footer extends React.Component{
    render(){
        return(
        <div>
            <footer className="bg-secondary ">
                <div className="container">
                    <div className="text-white py-5">
                        <div className="row">
                           <div className="col-sm-4">
                               <div className="">
                                   <h5>Quick links</h5>
                                   <ul className="list-unstyled">
                                       <li >
                                           <Link className="text-white" to="/cart">My cart</Link>
                                       </li>
                                       <li>
                                           <Link className="text-white" to="/wishlist">My wishlist</Link>
                                       </li>
                                   </ul>
                               </div>
                           </div>
                           <div className="col-sm-4">
                               <div className="">
                                   <h5>Contact us</h5>
                                   <p>
                                       <strong>Phone:</strong> +1234567890 <br/>
                                       <strong>Fax:</strong> +1234567890 
                                   </p>
                               </div>
                           </div>
                           <div className="col-sm-4">
                               <div className="float-right">
                                   <h5>Social links</h5>
                                   <div className="">
                                       <Link className="text-white mr-4" to="https://facebook.com/cutestores">
                                           <i className="fab fa-facebook"></i>
                                       </Link>
                                       <Link className="text-white mr-4" to="https://twitter,com/cutestores">
                                           <i className="fab fa-twitter"></i>
                                       </Link>
                                       <Link className="text-white mr-4" to="https://youtube.com/cutestores">
                                           <i className="fab fa-youtube"></i>
                                       </Link>
                                       <Link className="text-white"  to="https://instagram/cutestores">
                                           <i className="fab fa-instagram"></i>
                                       </Link>
                                   </div>
                               </div>
                           </div>
                        </div>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-sm-12">
                        <p className="text-white text-center">
                           All rights reserved to @
                          <Link to="/">
                              My-ecommerce-app
                          </Link>
                        </p>
                    </div>
                </div>

            </footer>
        </div>
        )
    }
}
export default Footer;