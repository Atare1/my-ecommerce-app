import React from 'react'
import AppContext from '../AppContext'



class ComputerItem extends React.Component{
    render(){
        let {computer} = this.props
        return(
            <div className="col-sm-4 mb-4">
                <div className="card p-3">
                  <div className="text-center">
                      <img className="img-fluid" src={computer.imageUrl} alt="" />
                  </div>
                  <hr/>
                        <h4 className="card-title">{computer.name}</h4>
                    <p className="card-text">{computer.description}</p>
                        <h5 className="card-text"> Price: <small>${computer.price}</small></h5>
                    <span className="card-text"><small>Available Quantity: </small>{computer.available_quantity}</span>
                    <div>
                        <button className="btn btn-sm btn-warning" onClick={()=>{this.context.addToCart(computer, 1)}}>cart</button>
                    </div>
                    
                 </div>
           
            </div>
        )
    }
}
ComputerItem.contextType = AppContext
export default ComputerItem