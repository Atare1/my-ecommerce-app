import React from 'react'
import AppContext from '../AppContext'


class CartItem extends React.Component{
    render(){
        let {product} = this.props
        return(
         <div>
             <div className="card mb-3">
                 <div  className="card-body">
                     <img className="float-left" alt="" src={product.imageUrl} style={{width:'12%'}}/>
                    <h4 className="card-title">{product.name}</h4>
                        <h5 className="card-text"><small>price: </small>${product.price}</h5>
        <span className="card-text"><small>Quantity added: </small>{product.qty}</span>
        <button className="btn btn-sm btn-warning float-right" onClick={()=> {this.context.removeFromCart(product.id)}}>Remove from cart</button>
                 </div>
             </div>
         </div>
        )
    }
}
CartItem.contextType = AppContext
export default CartItem