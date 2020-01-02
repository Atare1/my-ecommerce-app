import React from 'react'
import AppContext from '../AppContext'



class FashionItem extends React.Component{
    render(){
        let {fashion} = this.props
        return(
            <div className="col-sm-4 mb-4">
                <div className="card p-3">
                  <div className="text-center">
                      <img className="img-fluid" src={fashion.imageUrl} alt="" />
                  </div>
                  <hr/>
                        <h4 className="card-title">{fashion.name}</h4>
                    <p className="card-text">{fashion.description}</p>
                        <h5 className="card-text"> Price: <small>${fashion.price}</small></h5>
                    <span className="card-text"><small>Available Quantity: </small>{fashion.available_quantity}</span>
                    <div>
                        <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(fashion, 1)}}>cart</button>
                    </div>
                    
                 </div>
           
            </div>
        )
    }
}
FashionItem.contextType = AppContext
export default FashionItem