import React from 'react'
import Navbar from '../Components/Navbar'
import CartItem from './cartItem'
import {Link} from 'react-router-dom'
import AppContext from '../AppContext'




class Cart extends React.Component{
    render(){
let total = 0
this.context.cart.map((item)=> {
    total += (item.qty_added * item.product.price)
})
        return(
            <div>
                <Navbar/>
                <div className="container" >
                    <div className="">
                        <h3 className="card-title">Cart</h3>
                        <hr/>
                        {
                            this.context.cart.map((product,index) =>
                           <CartItem product={product.product} qty={product.qty_added} key={index}/>
                         
                            )
                        }
                        <hr/>
                        <div className="float-right mb-5">
                            <h4><small>Total Amount: </small>
                           <span className="text-primary">$ {total}</span>
                            </h4>
                        </div>
                        
                        <div className="row">

                           <div className="col-sm-12">
                               <Link to="/"><button className="btn btn-success ">Continue shopping</button></Link>
                           <button className="btn btn-danger float-right" onClick={this.context.clearCart}>Clear cart</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
Cart.contextType = AppContext
export default Cart