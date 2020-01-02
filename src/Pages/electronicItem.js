import React from 'react'
import AppContext from '../AppContext'



class ElectronicItem extends React.Component{
    render(){
        let {electronic} = this.props
        return(
            <div className="col-sm-4 mb-4">
                <div className="card p-3">
                  <div className="text-center">
                      <img className="img-fluid" src={electronic.imageUrl} alt="" />
                  </div>
                  <hr/>
                        <h4 className="card-title">{electronic.name}</h4>
                    <p className="card-text">{electronic.description}</p>
                        <h5 className="card-text"> Price: <small>${electronic.price}</small></h5>
                    <span className="card-text"><small>Available Quantity: </small>{electronic.available_quantity}</span>
                    <div>
                        <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(electronic, 1)}}>cart</button>
                    </div>
                    
                 </div>
           
            </div>
        )
    }
}
ElectronicItem.contextType = AppContext
export default ElectronicItem